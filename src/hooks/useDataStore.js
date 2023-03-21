import { useDataMutation, useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { NAMESPACE, STOCK } from '../shared'

const createDataStoreMutation = {
    resource: `dataStore/${NAMESPACE}/${STOCK}`,
    type: 'create',
    data: [],
}

export const useCreateDataStore = () => {
    const [mutate, { error, data }] = useDataMutation(createDataStoreMutation)

    const errorMessage =
        error &&
        `${i18n.t(
            'Something went wrong while saving the default configuration'
        )} : ${error.message}`

    return {
        mutate,
        error: errorMessage,
        data,
    }
}

/**
 * get data store
 * key: stock
 **/
const getDataStoreQuery = {
    dataStore: {
        resource: `dataStore/${NAMESPACE}/${STOCK}`,
    },
}

export const useGetDataStore = () => {
    const { data, error, loading } = useDataQuery(getDataStoreQuery)

    return {
        stockUseCases: data?.dataStore,
        error,
        loading,
    }
}

/**
 * update data store
 * key: Stock
 * Configuration that can be saved here: Stock
 * */

export const saveUseCases = {
    resource: `dataStore/${NAMESPACE}/${STOCK}`,
    type: 'update',
    data: ({ settings }) => [...settings],
}

export const useUpdateUseCases = () => {
    const [mutate, { error, data }] = useDataMutation(saveUseCases)

    return {
        mutate,
        error,
        data,
    }
}
