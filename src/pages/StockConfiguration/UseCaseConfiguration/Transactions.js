import i18n from '@dhis2/d2-i18n'
import { FieldSet, Legend } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import { Select } from '../../../components'
import styles from './Sections.module.css'

const Transactions = ({ settings, handleSettings, element }) => {
    const handleChange = (e, name) => {
        handleSettings({
            ...settings,
            [e.name || name]: e.selected,
        })
    }

    return (
        <div className={styles.container}>
            <FieldSet>
                <Legend>
                    <span className={styles.legendLabel}>
                        {i18n.t('Distributed')}
                    </span>
                </Legend>
                <Select
                    dense
                    inputWidth="400px"
                    label={i18n.t('Distributed to')}
                    name="distributedTo"
                    options={element?.distributedTo || []}
                    selected={settings.distributedTo}
                    onChange={(e) => handleChange(e, 'distributedTo')}
                    className={styles.mb16}
                />
                <Select
                    dense
                    inputWidth="400px"
                    label={i18n.t('Distributed Stock')}
                    name="stockDistributed"
                    options={element?.stockDistributed || []}
                    selected={settings.stockDistributed}
                    onChange={(e) => handleChange(e, 'stockDistributed')}
                />
            </FieldSet>

            <FieldSet>
                <Legend>
                    <span className={styles.legendLabel}>
                        {i18n.t('Corrected')}
                    </span>
                </Legend>
                <Select
                    dense
                    inputWidth="400px"
                    label={i18n.t('Corrected Stock')}
                    name="stockCorrected"
                    filterable={true}
                    options={element?.stockCorrected || []}
                    selected={settings.stockCorrected}
                    onChange={(e) => handleChange(e, 'stockCorrected')}
                />
            </FieldSet>

            <FieldSet>
                <Legend>
                    <span className={styles.legendLabel}>
                        {i18n.t('Discarded')}
                    </span>
                </Legend>
                <Select
                    dense
                    inputWidth="400px"
                    label={i18n.t('Discarded Stock')}
                    name="stockDiscarded"
                    options={element?.stockDiscarded || []}
                    selected={settings.stockDiscarded}
                    onChange={(e) => handleChange(e, 'stockDiscarded')}
                />
            </FieldSet>
        </div>
    )
}

Transactions.propTypes = {
    settings: PropTypes.object,
    handleSettings: PropTypes.func,
    element: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Transactions
