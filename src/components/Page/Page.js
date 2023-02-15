import { CenteredContent, CircularLoader, ComponentCover } from '@dhis2/ui'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Page.module.css'

export const Page = ({
    title,
    desc,
    limitWidth = true,
    children,
    loading = false,
    dataTest,
    transparent = false,
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
            <p className={styles.desc}>{desc}</p>
        </header>
        <div className={styles.content}>
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
}
