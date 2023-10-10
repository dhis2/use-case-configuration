import i18n from '@dhis2/d2-i18n'
import { ButtonStrip, Button } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import { SaveAlert } from '../AlertStack/SaveAlert'

export const FooterButton = ({
    handleSave,
    disabled,
    success,
    error,
    handleReset,
}) => (
    <ButtonStrip>
        <SaveValues
            handleSave={handleSave}
            disabled={disabled}
            success={success}
            error={error}
        />
        <ResetValues onReset={handleReset} />
    </ButtonStrip>
)

FooterButton.propTypes = {
    handleSave: PropTypes.func,
    handleReset: PropTypes.func,
    disabled: PropTypes.bool,
    success: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
}

const SaveValues = ({ handleSave, disabled, success, error }) => (
    <>
        <Button onClick={handleSave} disabled={disabled} primary>
            {i18n.t('Save')}
        </Button>

        {(success || error) && (
            <SaveAlert error={error} message={error} success={success} />
        )}
    </>
)

SaveValues.propTypes = {
    handleSave: PropTypes.func,
    disabled: PropTypes.bool,
    success: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
}

const ResetValues = ({ onReset }) => (
    <Button onClick={onReset}>{i18n.t('Reset all values to default')}</Button>
)

ResetValues.propTypes = {
    onReset: PropTypes.func,
}
