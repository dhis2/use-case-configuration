import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React from 'react'
import { Select } from '../../../components'
import { defaultStockCase } from '../helper'
import { useLogisticPrograms } from '../logisticHelper'

const program = 'programUid'

const SelectProgram = ({ settings, handleSettings }) => {
    const { programs } = useLogisticPrograms()

    const handleChange = (e) => {
        handleSettings({
            ...defaultStockCase(),
            description: settings.description,
            [program]: e.selected,
        })
    }

    return (
        <Select
            dense
            label={i18n.t('Program')}
            inputWidth="400px"
            name={program}
            filterable={true}
            options={programs}
            selected={settings[program]}
            onChange={handleChange}
        />
    )
}

SelectProgram.propTypes = {
    settings: PropTypes.object,
    handleSettings: PropTypes.func,
}

export default SelectProgram
