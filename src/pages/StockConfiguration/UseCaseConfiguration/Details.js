import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React from 'react'
import { Select } from '../../../components'
import { handleElement } from './helper'
import styles from './Sections.module.css'

const Details = ({ settings, handleSettings, element }) => {
    const handleChange = (e, name) => {
        handleSettings({
            ...settings,
            [e.name || name]: e.selected,
        })
    }

    return (
        <div className={styles.container}>
            <Select
                dense
                inputWidth="400px"
                label={i18n.t('Item Code')}
                name="itemCode"
                required={true}
                options={element?.itemCode || []}
                selected={settings.itemCode}
                onChange={(e) => handleChange(e, 'itemCode')}
            />

            <Select
                dense
                inputWidth="400px"
                label={i18n.t('Item Description')}
                name="itemDescription"
                required={true}
                options={element?.itemDescription || []}
                selected={settings.itemDescription}
                onChange={(e) => handleChange(e, 'itemDescription')}
            />

            <Select
                dense
                inputWidth="400px"
                label={i18n.t('Stock on Hand')}
                name="stockOnHand"
                required={true}
                options={element?.stockOnHand || []}
                selected={handleElement(
                    element,
                    settings.stockOnHand,
                    'stockOnHand'
                )}
                onChange={(e) => handleChange(e, 'stockOnHand')}
            />
        </div>
    )
}

Details.propTypes = {
    settings: PropTypes.object,
    handleSettings: PropTypes.func,
    element: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Details
