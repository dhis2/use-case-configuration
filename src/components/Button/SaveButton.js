import i18n from '@dhis2/d2-i18n'
import { ButtonStrip } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import { Button } from './Button'
import styles from './Button.module.css'

export const SaveButton = ({ onClick, ...props }) => (
    <ButtonStrip>
        <Button
            primary
            className={styles.marginTB24}
            onClick={onClick}
            title={i18n.t('Save')}
            {...props}
        />
    </ButtonStrip>
)

SaveButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}
