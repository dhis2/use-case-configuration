import { CssVariables, CssReset } from '@dhis2/ui'
import React from 'react'
import { AppProvider } from './app-context/app-provider'
import { AuthWall } from './auth'
import { ConfigurationApp } from './components'
import i18n from './locales/index'

const App = () => (
    <>
        <CssReset />
        <CssVariables spacers colors />

        <AppProvider>
            <AuthWall>
                <ConfigurationApp />
            </AuthWall>
        </AppProvider>
    </>
)

export default App
