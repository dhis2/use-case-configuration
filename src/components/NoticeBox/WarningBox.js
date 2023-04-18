import { NoticeBox } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'

export const WarningBox = ({ title, text }) => (
    <NoticeBox error title={title}>
        {text}
    </NoticeBox>
)

WarningBox.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}
