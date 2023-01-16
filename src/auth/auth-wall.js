import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import classes from '../App.module.css'
import { AlertStack, FirstLaunchDialog } from '../components'
import { useCreateDataStore } from '../hooks'
import { useIsAuthorized } from './use-is-authorized'

const AuthWall = ({ children }) => {
    const { hasAppAccess, hasNamespace } = useIsAuthorized()
    const { mutate, error } = useCreateDataStore()
    const [hasDatastoreAccess, setDatastoreAccess] = useState(hasNamespace)

    const handleSave = () => {
        mutate().then((response) =>
            setDatastoreAccess(response.status === 'OK')
        )
    }

    if (!hasAppAccess) {
        return (
            <div className={classes.container}>
                <h3>
                    {i18n.t(
                        "You don't have access to the Use Cases App. Contact a system administrator to request access."
                    )}
                </h3>
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
