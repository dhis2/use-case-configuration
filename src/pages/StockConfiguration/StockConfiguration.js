import i18n from '@dhis2/d2-i18n'
import React from 'react'
import { useAppContext } from '../../app-context'
import { useIsAuthorized } from '../../auth/use-is-authorized'
import { Page } from '../../components'

const TITLE = i18n.t('Configure Program')
const DESCRIPTION = i18n.t('Configure Program according to a specific type')

// TODO: this is temporary page that displays user info, should be changed to the stock use case
export const StockConfiguration = () => {
    const { authorities, username } = useAppContext()
    const { hasAccess } = useIsAuthorized()
    const dataStore = hasAccess ? 'have' : 'do not have'

    return (
        <Page title={TITLE} desc={DESCRIPTION} dataTest="stock">
            <>
                <h1>{i18n.t('Hello {{name}}', { name: username })}</h1>
                <h3>{i18n.t('Welcome to DHIS2!')}</h3>
                <p>
                    {i18n.t(
                        'currently you have {{authorities}} authorities and {{dataStore}} access to datastore USE_CASES name space',
                        { authorities, dataStore }
                    )}
                </p>
            </>
        </Page>
    )
}
