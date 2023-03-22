import i18n from '@dhis2/d2-i18n'
import { ButtonStrip } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import { Button } from './Button'
import styles from './Button.module.css'

export const AddButton = ({ onClick, element, disabled }) => (
    <ButtonStrip>
        <Button
            small
            className={styles.marginTB24}
            title={i18n.t('Add {{element}}', { element: element })}
            onClick={onClick}
            disabled={disabled}
        />
    </ButtonStrip>
)

AddButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    element: PropTypes.string,
    disabled: PropTypes.bool,
}
