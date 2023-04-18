import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import classes from '../App.module.css'
import { AlertStack, FirstLaunchDialog, WarningBox } from '../components'
import { useCreateDataStore } from '../hooks'
import { useIsAuthorized } from './use-is-authorized'

const AuthWall = ({ children }) => {
    const { hasAppAccess, hasNamespace } = useIsAuthorized()
    const { mutate, error } = useCreateDataStore()
    const [hasDatastoreAccess, setDatastoreAccess] = useState(hasNamespace)

    const handleSave = () => {
        mutate().then((response) =>
            setDatastoreAccess(
                200 <= response.httpStatusCode && response.httpStatusCode < 300
            )
        )
    }

    if (!hasAppAccess.version) {
        return (
            <div className={classes.container}>
                <WarningBox
                    title={i18n.t('Access denied')}
                    text={i18n.t(
                        "You don't have access to the Use Cases App because the DHIS2 version is lower than the 2.39.1. Contact a system administrator."
                    )}
                />
            </div>
        )
    }

    if (!hasAppAccess.authorities) {
        return (
            <div className={classes.container}>
                <WarningBox
                    title={i18n.t('Access denied')}
                    text={i18n.t(
                        "You don't have access to the Use Cases App. Contact a system administrator to request access."
                    )}
                />
            </div>
        )
    }

    if (!hasDatastoreAccess) {
        return (
            <>
                {error && <AlertStack error={error} message={error} />}
                <FirstLaunchDialog handleSave={handleSave} />
            </>
        )
    }

    return children
}

AuthWall.propTypes = {
    children: PropTypes.node.isRequired,
}

export { AuthWall }
