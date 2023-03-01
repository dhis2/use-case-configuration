import i18n from '@dhis2/d2-i18n'
import {
    DataTable,
    DataTableColumnHeader,
    DataTableRow,
    TableHead,
    TableBody,
    DataTableCell,
} from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import { ActionButton } from './ActionButton'
import styles from './Table.module.css'

export const TableActions = ({ rows, actions }) => (
    <div className={styles.table}>
        <DataTable scrollHeight="350px">
            <TableHead>
                <DataTableRow>
                    <DataTableColumnHeader fixed top="0">
                        {i18n.t('Program name')}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader fixed top="0">
                        {i18n.t('Type')}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader fixed top="0">
                        {i18n.t('Description')}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader fixed top="0">
                        {i18n.t('Actions')}
                    </DataTableColumnHeader>
                </DataTableRow>
            </TableHead>
            <TableBody>
                {rows.map(({ programUid, name, programType, description }) => (
                    <DataTableRow key={programUid}>
                        <DataTableCell>{name}</DataTableCell>
                        <DataTableCell>{programType}</DataTableCell>
                        <DataTableCell>{description}</DataTableCell>
                        <DataTableCell>
                            <ActionButton
                                element={programUid}
                                handleActions={actions}
                            />
                        </DataTableCell>
                    </DataTableRow>
                ))}
            </TableBody>
        </DataTable>
    </div>
)

TableActions.propTypes = {
    rows: PropTypes.array,
    actions: PropTypes.object,
}
