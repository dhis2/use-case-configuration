import semver from 'semver'
import { useAppContext } from '../app-context'
import { NAMESPACE } from '../shared'
import { useDebugInfo } from './use-debug-info'

const ALL = 'ALL'
const minVersion = '2.39.1'

//TODO: define authority name reserved for this app other than ALL
export const useIsAuthorized = () => {
    const { dhis2_version } = useDebugInfo()
    const { authorities, dataStore } = useAppContext()

    const hasAppAccessAuthorities = authorities.some(
        (authority) => authority === ALL
    )
    const hasAppAccessVersion = semver.gte(dhis2_version, minVersion)
    const hasNamespace = dataStore.some((key) => key === NAMESPACE)

    return {
        hasAppAccess: {
            authorities: hasAppAccessAuthorities,
            version: hasAppAccessVersion,
        },
        hasNamespace,
    }
}
