import { InputField } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'

export const Input = ({ label, value, ...props }) => (
    <InputField label={label} value={value} {...props} />
)

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
