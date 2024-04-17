import { useConfig } from '@dhis2/app-runtime'
import { parseVersion } from '../utils'

export const useDebugInfo = () => {
    const { apiVersion, systemInfo } = useConfig()

    return {
        apiVersion: apiVersion,
        dhis2_version: parseVersion(systemInfo?.version),
    }
}
