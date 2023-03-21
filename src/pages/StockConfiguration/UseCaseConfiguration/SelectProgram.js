import i18n from '@dhis2/d2-i18n'
import find from 'lodash/find'
import reject from 'lodash/reject'
import PropTypes from 'prop-types'
import React from 'react'
import { Select } from '../../../components'
import { defaultStockCase } from '../helper'
import { useLogisticPrograms } from '../logisticHelper'

const program = 'programUid'

const SelectProgram = ({ settings, handleSettings, useCases, disabled }) => {
    const { programs } = useLogisticPrograms()
    const programList = programs
        ? reject(programs, (item) => find(useCases, { programUid: item.id }))
        : []

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
            required={true}
            options={programList}
            selected={settings[program]}
            onChange={handleChange}
            disabled={disabled}
        />
    )
}

SelectProgram.propTypes = {
    settings: PropTypes.object,
    handleSettings: PropTypes.func,
    useCases: PropTypes.array,
    disabled: PropTypes.bool,
}

export default SelectProgram
