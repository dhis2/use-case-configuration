import isEmpty from 'lodash/isEmpty'

export const handleElement = (elementList, currentElement, type) => {
    const element = elementList[type].find((e) => e.id === currentElement)
    return isEmpty(element) ? '' : currentElement
}
