import { AlertStack as UiAlertStack, AlertBar } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'

const DEFAULT_DURATION = 3000

export const AlertStack = ({ error, success, warning, message }) => (
    <UiAlertStack>
        <AlertBar
            duration={DEFAULT_DURATION}
            critical={!!error}
            success={!!success}
            warning={!!warning}
        >
            {message}
        </AlertBar>
    </UiAlertStack>
)

AlertStack.propTypes = {
    error: PropTypes.string,
    success: PropTypes.string,
    warning: PropTypes.string,
    message: PropTypes.string,
}
