import { useDataQuery } from '@dhis2/app-runtime'

export const trackedEntityAttributeQuery = (list) => ({
    trackedEntityAttributes: {
        resource: 'trackedEntityAttributes',
        params: {
            paging: false,
            fields: ['id', 'displayName', 'valueType', 'unique'],
            filter: `id:in:[${list}]`,
        },
    },
})

export const dataElementQuery = (list) => ({
    dataElements: {
        resource: 'dataElements',
        params: {
            paging: false,
            fields: ['id', 'displayName', 'valueType', 'optionSetValue'],
            filter: `id:in:[${list}]`,
        },
    },
})

export const useTEA = (teas) => {
    const { data, fetching, error, loading } = useDataQuery(
        trackedEntityAttributeQuery(teas)
    )

    return {
        tea: data?.trackedEntityAttributes?.trackedEntityAttributes,
        fetching,
        error,
        loading,
    }
}

export const useDataElements = (elements) => {
    const { data, fetching, error } = useDataQuery(dataElementQuery(elements))

    return {
        dataElement: data?.dataElements?.dataElements,
        fetching,
        error,
    }
}
