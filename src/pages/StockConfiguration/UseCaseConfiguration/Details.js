import i18n from '@dhis2/d2-i18n'
import isEmpty from 'lodash/isEmpty'
import PropTypes from 'prop-types'
import React, { useEffect, useMemo } from 'react'
import { Select } from '../../../components'
import { handleElement, validationDEText } from './helper'
import styles from './Sections.module.css'

const Details = ({ settings, handleSettings, element }) => {
    const stockOnHandValue = settings.stockOnHand

    const validStockOnHand = useMemo(
        () => handleElement(element, stockOnHandValue, 'stockOnHand'),
        [element, stockOnHandValue]
    )

    useEffect(() => {
        if (isEmpty(validStockOnHand)) {
            handleSettings({
                ...settings,
                stockOnHand: '',
            })
        }
    }, [validStockOnHand])

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
                error={isEmpty(validStockOnHand)}
                validationText={validationDEText}
                options={element?.stockOnHand || []}
                selected={validStockOnHand}
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
