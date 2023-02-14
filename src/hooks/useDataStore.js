import { useDataMutation } from '@dhis2/app-runtime'
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
