import PropTypes from 'prop-types'
import React from 'react'
import { SaveAlert } from '../AlertStack/SaveAlert'
import { SaveButton } from '../Button/SaveButton'

export const FooterButton = ({ handleSave, disabled, success, error }) => (
    <div>
        <SaveButton onClick={handleSave} disabled={disabled} />

        {(success || error) && (
            <SaveAlert error={error} message={error} success={success} />
        )}
    </div>
)

FooterButton.propTypes = {
    handleSave: PropTypes.func,
    disabled: PropTypes.bool,
    success: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
}
