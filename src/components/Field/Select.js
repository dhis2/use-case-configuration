import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'

export const Select = ({ options, selected, onChange, label, ...props }) => (
    <SingleSelectField
        onChange={onChange}
        selected={selected}
        label={label}
        {...props}
    >
        {options.map((option) => (
            <SingleSelectOption
                key={option.value || option.id}
                label={option.label || option.displayName}
                value={option.value || option.id}
            />
        ))}
    </SingleSelectField>
)

Select.propTypes = {
    options: PropTypes.array,
    selected: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onChange: PropTypes.func,
    label: PropTypes.string,
}
