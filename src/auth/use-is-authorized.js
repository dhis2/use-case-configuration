import { useAppContext } from '../app-context'
import { NAMESPACE } from '../shared'

export const useIsAuthorized = () => {
    //TODO: define authority name reserved for this app other than ALL

    const { authorities, dataStore } = useAppContext()
    const hasAppAccess = authorities.some((authority) => authority === 'ALL')
    const hasNamespace = dataStore.some((key) => key === NAMESPACE)

    return { hasAppAccess, hasNamespace }
}
