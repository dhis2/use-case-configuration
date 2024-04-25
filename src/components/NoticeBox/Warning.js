import i18n from '@dhis2/d2-i18n'
import { NoticeBox } from '@dhis2/ui'
import React from 'react'

export const Warning = () => (
    <NoticeBox warning>
        <>
            <p>
                {i18n.t(
                    'Starting from version 1.1 of this web app, Data Elements such as "Stock on Hand" and "Corrected Stock" must have a value type of "Positive or Zero Integer".'
                )}
            </p>
            <p>
                {i18n.t(
                    'Please ensure that these data elements are configured accordingly to prevent any issues with data input or processing.'
                )}
            </p>
        </>
    </NoticeBox>
)
