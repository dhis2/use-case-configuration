import { MenuItem } from '@dhis2/ui'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Sidebar.module.css'

export const SidebarItem = ({ name, code, active, className }) => {
    return (
        <MenuItem
            active={active}
            label={name}
            className={cx(className, {
                [styles.sidebarItem]: !active,
                [styles.sidebarItemActive]: active,
            })}
            dataTest={`sidebar-link-${code}`}
        />
    )
}

SidebarItem.propTypes = {
    active: PropTypes.bool.isRequired,
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
}
