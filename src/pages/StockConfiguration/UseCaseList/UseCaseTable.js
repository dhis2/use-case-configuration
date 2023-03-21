import isEmpty from 'lodash/isEmpty'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { DeleteElementDialog } from '../../../components'
import {
    getElementByProgramId,
    getElementName,
    populateSettingsDataStore,
    populateStockCase,
} from '../helper'
import { useLogisticPrograms } from '../logisticHelper'
import { UseCaseConfiguration } from '../UseCaseConfiguration'
import { TableActions } from './TableActions'

export const UseCaseTable = ({ list, handleList }) => {
    const { programs } = useLogisticPrograms()
    const [configurationList, setConfiguration] = useState([])
    const [openDelete, setDelete] = useState(false)
    const [openEdit, setEdit] = useState(false)
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
        onEdit: (e) => {
            setSelected(
                populateStockCase(getElementByProgramId(e, configurationList))
            )
            setEdit(true)
        },
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

            {openEdit && (
                <UseCaseConfiguration
                    useCases={list}
                    handleUseCases={handleList}
                    handleOpen={setEdit}
                    edit={true}
                    selectedRow={selectedRow}
                />
            )}
        </>
    )
}

UseCaseTable.propTypes = {
    list: PropTypes.array,
    handleList: PropTypes.func,
}
