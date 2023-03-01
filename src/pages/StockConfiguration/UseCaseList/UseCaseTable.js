import isEmpty from 'lodash/isEmpty'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { getElementName } from '../helper'
import { useLogisticPrograms } from '../logisticHelper'
import { TableActions } from './TableActions'

export const UseCaseTable = ({ list }) => {
    const { programs } = useLogisticPrograms()
    const [configurationList, setConfiguration] = useState([])

    useEffect(() => {
        const updatedList = []
        list.forEach((e) => {
            const element = e
            element.name = getElementName(e.programUid, programs)
            updatedList.push(element)
        })
        setConfiguration(updatedList)
    }, [list])

    // TODO: create functions to handle edit and delete
    const actions = {
        onEdit: () => {},
        onDelete: () => {},
    }

    return (
        <>
            {!isEmpty(configurationList) && (
                <TableActions actions={actions} rows={list} />
            )}
        </>
    )
}

UseCaseTable.propTypes = {
    list: PropTypes.array,
}
