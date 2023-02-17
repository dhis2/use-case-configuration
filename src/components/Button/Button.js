import { Button as UIButton } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'

export const Button = ({ title, onClick, ...props }) => (
    <UIButton onClick={onClick} {...props}>
        {title}
    </UIButton>
)

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
