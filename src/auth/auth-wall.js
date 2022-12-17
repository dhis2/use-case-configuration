import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React from 'react'
import classes from '../App.module.css'
import { FirstLaunchDialog } from '../components'
import { useIsAuthorized } from './use-is-authorized'

const AuthWall = ({ children }) => {
    const { hasAppAccess, hasNamespace } = useIsAuthorized()

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

    if (!hasNamespace) {
        return (
            <>
                <FirstLaunchDialog />
            </>
        )
    }

    return children
}

AuthWall.propTypes = {
    children: PropTypes.node.isRequired,
}

export { AuthWall }
