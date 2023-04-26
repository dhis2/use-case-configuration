import i18n from '@dhis2/d2-i18n'
import { ButtonStrip, TabBar, Tab } from '@dhis2/ui'
import findIndex from 'lodash/findIndex'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Button } from '../../../components'
import { validMandatoryFieldSection } from '../helper'
import Details from './Details'
import General from './General'
import styles from './Sections.module.css'
import Transactions from './Transactions'

export const Sections = ({
    settings,
    handleSettings,
    element,
    useCases,
    edit,
}) => {
    const [selectedTab, setSelectTab] = useState(0)
    const [disabledNext, setDisable] = useState(true)

    const TabItems = [
        {
            key: 'general-tab',
            label: i18n.t('General'),
            content: General,
        },
        {
            key: 'details-tab',
            label: i18n.t('Details'),
            content: Details,
        },
        {
            key: 'transactions-tab',
            label: i18n.t('Transactions'),
            content: Transactions,
        },
    ]

    const generalKey = findIndex(TabItems, { key: 'general-tab' })

    const transactionKey = findIndex(TabItems, { key: 'transactions-tab' })

    const CurrentSection = TabItems[selectedTab].content

    const handleDisableTab = (index) =>
        index === selectedTab
            ? false
            : index === 0 || index === selectedTab - 1
            ? false
            : index === selectedTab + 2
            ? true
            : disabledNext

    useEffect(() => {
        setDisable(
            validMandatoryFieldSection(settings, TabItems[selectedTab].key)
        )
    }, [settings, selectedTab])

    return (
        <>
            <div className={styles.tabs}>
                <TabBar fixed>
                    {TabItems.map(({ label }, index) => (
                        <Tab
                            key={index}
                            onClick={() => setSelectTab(index)}
                            selected={index === selectedTab}
                            disabled={handleDisableTab(index)}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabBar>
            </div>
            <div>
                <span className={styles.tabSectionTitle}>
                    {TabItems[selectedTab].label}
                </span>

                <CurrentSection
                    settings={settings}
                    handleSettings={handleSettings}
                    element={element}
                    useCases={useCases}
                    edit={edit}
                />

                <ButtonStrip end className={styles.btnContainer}>
                    {selectedTab !== generalKey && (
                        <Button
                            small
                            onClick={() => setSelectTab(selectedTab - 1)}
                            title={i18n.t('Prev')}
                        />
                    )}
                    {selectedTab !== transactionKey && (
                        <Button
                            small
                            onClick={() => setSelectTab(selectedTab + 1)}
                            title={i18n.t('Next')}
                            disabled={disabledNext}
                        />
                    )}
                </ButtonStrip>
            </div>
        </>
    )
}

Sections.propTypes = {
    settings: PropTypes.object,
    handleSettings: PropTypes.func,
    element: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    useCases: PropTypes.array,
    edit: PropTypes.bool,
}
