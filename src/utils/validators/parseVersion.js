import semver from 'semver'

/**
 * Parse the input version using semver
 */

export const parseVersion = (inputVersion) => {
    const validVersion = semver.valid(inputVersion)
    const parsedVersion = semver.coerce(inputVersion)

    if (validVersion) {
        return validVersion
    } else if (parsedVersion) {
        const { major, minor, patch, prerelease } = parsedVersion
        return `${major}.${minor}.${patch}${prerelease || ''}`
    }
}
