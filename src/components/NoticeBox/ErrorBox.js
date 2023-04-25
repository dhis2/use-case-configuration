import { NoticeBox } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'

export const ErrorBox = ({ title, text }) => (
    <NoticeBox error title={title}>
        {text}
    </NoticeBox>
)

ErrorBox.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}
