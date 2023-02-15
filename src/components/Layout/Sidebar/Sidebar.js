import i18n from '@dhis2/d2-i18n'
import { Menu } from '@dhis2/ui'
import React from 'react'
import { SidebarItem } from './SidebarItem'

export const Sidebar = () => {
    return (
        <Menu>
            <SidebarItem
                name={i18n.t('Configuration')}
                code={'home'}
                active={true}
            />
        </Menu>
    )
}
