import i18n from '@dhis2/d2-i18n'
import { CenteredContent, CircularLoader, ComponentCover, Tag } from '@dhis2/ui'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { FooterButton } from './FooterButton'
import styles from './Page.module.css'

export const Page = ({
    title,
    desc,
    limitWidth = true,
    children,
    loading = false,
    dataTest,
    transparent = false,
    handleSave,
    disabled = true,
    error,
    success,
    handleReset,
    version,
}) => (
    <div
        className={cx(styles.container, {
            [styles.limitedWidth]: limitWidth,
            [styles.transparent]: transparent,
        })}
        data-test={dataTest}
    >
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            {version && (
                <Tag className={styles.tagVersion}>
                    {i18n.t('v{{version}}', { version: version })}
                </Tag>
            )}
            <p className={styles.desc}>{desc}</p>
        </header>
        <div>
            {!!loading && (
                <div className={styles.loading}>
                    <ComponentCover translucent>
                        <CenteredContent>
                            <CircularLoader />
                        </CenteredContent>
                    </ComponentCover>
                </div>
            )}
            {children}
            <FooterButton
                handleSave={handleSave}
                disabled={disabled}
                error={error}
                success={success}
                handleReset={handleReset}
            />
        </div>
    </div>
)

Page.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
        .isRequired,
    dataTest: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    limitWidth: PropTypes.bool,
    loading: PropTypes.bool,
    transparent: PropTypes.bool,
    handleReset: PropTypes.func,
    handleSave: PropTypes.func,
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
    success: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object,
    ]),
    version: PropTypes.string,
}
