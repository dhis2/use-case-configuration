import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React from 'react'
import { Input, Select } from '../../../components'
import { useLogisticPrograms } from '../logisticHelper'
import styles from './Sections.module.css'

const programType = [
    {
        value: 'logistics',
        label: i18n.t('Logistics'),
    },
]

const General = ({ settings, handleSettings }) => {
    const { programs } = useLogisticPrograms()

    const handleChange = (e, name) => {
        handleSettings({
            ...settings,
            [e.name || name]: e.selected || e.value,
        })
    }

    return (
        <div className={styles.container}>
            <Select
                dense
                inputWidth="400px"
                label={i18n.t('Program Types')}
                name="programType"
                options={programType}
                selected={settings.programType}
                onChange={(e) => handleChange(e, 'programType')}
            />

            <Input
                dense
                inputWidth="400px"
                helpText={i18n.t(
                    'Add a description of the current program or program type'
                )}
                label={i18n.t('Description')}
                name="description"
                value={settings.description}
                onChange={handleChange}
            />

            <Select
                dense
                label={i18n.t('Program')}
                inputWidth="400px"
                name="programUid"
                filterable={true}
                options={programs}
                selected={settings.programUid}
                onChange={(e) => handleChange(e, 'programUid')}
            />
        </div>
    )
}

General.propTypes = {
    settings: PropTypes.object,
    handleSettings: PropTypes.func,
}

export default General
