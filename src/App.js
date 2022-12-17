import i18n from '@dhis2/d2-i18n'
import { CssVariables, CssReset } from '@dhis2/ui'
import React from 'react'
import { useAppContext } from './app-context'
import { AppProvider } from './app-context/app-provider'
import classes from './App.module.css'
import { AuthWall } from './auth'
import { useIsAuthorized } from './auth/use-is-authorized'

const App = () => (
    <>
        <CssReset />
        <CssVariables spacers colors />

        <AppProvider>
            <AuthWall>
                <div className={classes.container}>
                    <BasicData />
                </div>
            </AuthWall>
        </AppProvider>
    </>
)

export default App

// TODO: this is temporary app that displays user info, should change to the real app
const BasicData = () => {
    const { authorities, username } = useAppContext()
    const { hasAccess } = useIsAuthorized()
    const dataStore = hasAccess ? 'have' : 'do not have'

    return (
        <div>
            <h1>{i18n.t('Hello {{name}}', { name: username })}</h1>
            <h3>{i18n.t('Welcome to DHIS2!')}</h3>
            <p>
                {i18n.t(
                    'currently you have {{authorities}} authorities and {{dataStore}} access to datastore USE_CASES name space',
                    { authorities, dataStore }
                )}
            </p>
        </div>
    )
}
