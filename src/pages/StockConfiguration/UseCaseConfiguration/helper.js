import i18n from '@dhis2/d2-i18n'
import isEmpty from 'lodash/isEmpty'

export const handleElement = (elementList, currentElement, type) => {
    const element = elementList[type].find((e) => e.id === currentElement)
    return isEmpty(element) ? '' : currentElement
}

export const validationDEText = i18n.t(
    'Data element value type should be a positive integer or zero.'
)
