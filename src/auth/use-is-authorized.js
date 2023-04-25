import { useConfig } from '@dhis2/app-runtime'
import { useAppContext } from '../app-context'
import { NAMESPACE } from '../shared'

const ALL = 'ALL'
const minVersion = '39.1'

//TODO: define authority name reserved for this app other than ALL
export const useIsAuthorized = () => {
    const { apiVersion } = useConfig()
    const { authorities, dataStore } = useAppContext()

    const hasAppAccessAuthorities = authorities.some(
        (authority) => authority === ALL
    )
    const hasAppAccessVersion = apiVersion >= minVersion
    const hasNamespace = dataStore.some((key) => key === NAMESPACE)

    return {
        hasAppAccess: {
            authorities: hasAppAccessAuthorities,
            version: hasAppAccessVersion,
        },
        hasNamespace,
    }
}
