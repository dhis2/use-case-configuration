import i18n from '@dhis2/d2-i18n'
import { ButtonStrip } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import { Button } from '../../../components'

export const ActionButton = ({ element, handleActions }) => {
    const { onEdit, onDelete } = handleActions

    return (
        <ButtonStrip>
            <Button
                small
                onClick={() => onEdit(element)}
                title={i18n.t('Edit')}
            />
            <Button
                small
                destructive
                onClick={() => onDelete(element)}
                title={i18n.t('Delete')}
            />
        </ButtonStrip>
    )
}

ActionButton.propTypes = {
    element: PropTypes.string,
    handleActions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
}
