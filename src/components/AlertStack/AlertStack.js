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
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
    success: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
    warning: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
    message: PropTypes.string,
}
