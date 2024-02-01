import { parseVersion } from '../parseVersion'

test('2.39.5-SNAPSHOT parsed version is 2.39.5-SNAPSHOT', () => {
    expect(parseVersion('2.39.5-SNAPSHOT')).toBe('2.39.5-SNAPSHOT')
})

test('2.39.1.1 parsed version is 2.39.1', () => {
    expect(parseVersion('2.39.1.1')).toBe('2.39.1')
})

test('2.40 parsed version is 2.40.0', () => {
    expect(parseVersion('2.40')).toBe('2.40.0')
})

test('2.38.0 parsed version is 2.38.0', () => {
    expect(parseVersion('2.38.0')).toBe('2.38.0')
})
