import React from 'react'
import { StockConfiguration } from '../../pages'
import { Sidebar } from '../Layout/Sidebar/Sidebar'
import styles from './App.module.css'

export const ConfigurationApp = () => (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <Sidebar />
        </div>
        <main className={styles.content}>
            <StockConfiguration />
        </main>
    </div>
)
