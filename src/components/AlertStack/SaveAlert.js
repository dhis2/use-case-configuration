import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React from 'react'
import { AlertStack } from './AlertStack'

export const SaveAlert = ({ error, success, message }) => {
    const successMessage = i18n.t('Configuration was successfully saved')

    return (
        <>
            <AlertStack
                error={error}
                success={success}
                message={message || successMessage}
            />
        </>
    )
}

SaveAlert.propTypes = {
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
    success: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    message: PropTypes.string,
}
