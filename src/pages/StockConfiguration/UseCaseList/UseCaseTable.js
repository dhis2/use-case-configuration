import isEmpty from 'lodash/isEmpty'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { DeleteElementDialog } from '../../../components'
import {
    getElementByProgramId,
    getElementName,
    populateSettingsDataStore,
} from '../helper'
import { useLogisticPrograms } from '../logisticHelper'
import { TableActions } from './TableActions'

export const UseCaseTable = ({ list, handleList }) => {
    const { programs } = useLogisticPrograms()
    const [configurationList, setConfiguration] = useState([])
    const [openDelete, setDelete] = useState(false)
    const [selectedRow, setSelected] = useState({})

    useEffect(() => {
        const updatedList = []
        list.forEach((e) => {
            const element = e
            element.name = getElementName(e.programUid, programs)
            updatedList.push(element)
        })
        setConfiguration(updatedList)
    }, [list])

    const actions = {
        onEdit: () => {},
        onDelete: (e) => {
            setSelected(getElementByProgramId(e, configurationList))
            setDelete(true)
        },
    }

    const handleDelete = () => {
        const updatedList = configurationList.filter(
            (element) => element.programUid !== selectedRow.programUid
        )
        const dataStore = updatedList.reduce((accumulator, element) => {
            accumulator.push(populateSettingsDataStore(element))
            return accumulator
        }, [])
        handleList(dataStore)
        handleCloseDelete()
    }

    const handleCloseDelete = () => {
        setSelected({})
        setDelete(false)
    }

    return (
        <>
            {!isEmpty(configurationList) && (
                <TableActions actions={actions} rows={list} />
            )}

            <DeleteElementDialog
                open={openDelete}
                onClose={handleCloseDelete}
                onDelete={handleDelete}
                elementName={selectedRow.name}
            />
        </>
    )
}

UseCaseTable.propTypes = {
    list: PropTypes.array,
    handleList: PropTypes.func,
}
