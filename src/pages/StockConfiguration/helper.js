import uniq from 'lodash/uniq'
import { CORRECTED, DISCARDED, DISTRIBUTED, LOGISTICS } from '../../shared'
import { validateObjectByProperty } from '../../utils'

export const defaultStockCase = () => ({
    programUid: '',
    description: '',
    programType: LOGISTICS,
    stockOnHand: '',
    itemDescription: '',
    distributedTo: '',
    stockDistributed: '',
    stockCorrected: '',
    stockDiscarded: '',
})

export const populateSettingsDataStore = (settings) => ({
    programUid: settings.programUid,
    description: settings.description,
    programType: settings.programType,
    stockOnHand: settings.stockOnHand,
    itemDescription: settings.itemDescription,
    transactions: [
        {
            sortedOrder: 0,
            distributedTo: settings.distributedTo,
            stockDistributed: settings.stockDistributed,
            transactionType: DISTRIBUTED,
        },
        {
            sortedOrder: 1,
            stockCorrected: settings.stockCorrected,
            transactionType: CORRECTED,
        },
        {
            sortedOrder: 2,
            stockDiscarded: settings.stockDiscarded,
            transactionType: DISCARDED,
        },
    ],
})

export const flatArray = (array) => {
    const flattenArray = []
    array.forEach((element) => flattenArray.push(element.id))
    return uniq(flattenArray)
}

export const findElementById = (list, id) => list.find((e) => e.id === id)

export const validMandatoryFields = (settings) =>
    !validateObjectByProperty(
        [
            'programUid',
            'description',
            'programType',
            'stockOnHand',
            'itemDescription',
            'distributedTo',
            'stockDistributed',
            'stockCorrected',
            'stockDiscarded',
        ],
        settings
    )

export const getElementName = (id, list) =>
    findElementById(list, id)?.['displayName' || 'name']
