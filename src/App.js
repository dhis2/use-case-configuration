import { CssVariables, CssReset } from '@dhis2/ui'
import React from 'react'
import { AppProvider } from './app-context/app-provider'
import { AuthWall } from './auth'
import { ConfigurationApp } from './components'

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
