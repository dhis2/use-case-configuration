import i18n from '@dhis2/d2-i18n'
import isEqual from 'lodash/isEqual'
import isNil from 'lodash/isNil'
import React, { useState, useEffect } from 'react'
import { Page } from '../../components'
import { useGetDataStore, useUpdateUseCases } from '../../hooks'
import AddConfiguration from './AddConfiguration'

const TITLE = i18n.t('Configure Program')
const DESCRIPTION = i18n.t('Configure Program according to a specific type')

export const StockConfiguration = () => {
    const { stockUseCases, loading } = useGetDataStore()
    const { mutate, error, data } = useUpdateUseCases()
    const [initialUseCasesList, setInitialList] = useState([])
    const [useCasesList, setCurrentList] = useState([])
    const [disable, setDisable] = useState(true)

    /* Populate use case list based on datastore  */
    useEffect(() => {
        if (!isNil(stockUseCases)) {
            const dataStoreToUseCaseList = []
            stockUseCases.forEach((config) =>
                dataStoreToUseCaseList.push(config)
            )
            setInitialList(dataStoreToUseCaseList)
            setCurrentList(dataStoreToUseCaseList)
        }
    }, [stockUseCases])

    /* Enable save button if the use cases list changes */
    useEffect(() => {
        if (!isNil(useCasesList)) {
            !isEqual(useCasesList, initialUseCasesList)
                ? setDisable(false)
                : setDisable(true)
        }
    }, [useCasesList])

    const saveData = async () => {
        await mutate({ settings: stockUseCases })
    }

    return (
        <Page
            title={TITLE}
            desc={DESCRIPTION}
            dataTest="stock"
            loading={loading}
            handleSave={saveData}
            disabled={disable}
            error={error}
            success={data}
        >
            <div>
                <AddConfiguration
                    useCases={useCasesList}
                    handleUseCases={setCurrentList}
                />

                <div> summary Table </div>
            </div>
        </Page>
    )
}
