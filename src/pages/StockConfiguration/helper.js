import find from 'lodash/find'
import reject from 'lodash/reject'
import uniq from 'lodash/uniq'
import { CORRECTED, DISCARDED, DISTRIBUTED, LOGISTICS } from '../../shared'
import { validateObjectByProperty } from '../../utils'

export const defaultStockCase = () => ({
    programUid: '',
    description: '',
    programType: LOGISTICS,
    itemCode: '',
    stockOnHand: '',
    itemDescription: '',
    distributedTo: '',
    stockDistributed: '',
    stockCorrected: '',
    stockCount: '',
    stockDiscarded: '',
})

export const populateSettingsDataStore = (settings) => ({
    programUid: settings.programUid,
    description: settings.description,
    programType: settings.programType,
    itemCode: settings.itemCode,
    stockOnHand: settings.stockOnHand,
    itemDescription: settings.itemDescription,
    transactions: [
        {
            sortedOrder: 0,
            distributedTo:
                settings.distributedTo ||
                settings.transactions[0].distributedTo,
            stockDistributed:
                settings.stockDistributed ||
                settings.transactions[0].stockDistributed,
            transactionType: DISTRIBUTED,
        },
        {
            sortedOrder: 1,
            stockCorrected:
                settings.stockCorrected ||
                settings.transactions[1].stockCorrected,
            stockCount:
                settings.stockCount || settings.transactions[1].stockCount,
            transactionType: CORRECTED,
        },
        {
            sortedOrder: 2,
            stockDiscarded:
                settings.stockDiscarded ||
                settings.transactions[2].stockDiscarded,
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
            'programType',
            'itemCode',
            'stockOnHand',
            'itemDescription',
            'distributedTo',
            'stockDistributed',
            'stockCorrected',
            'stockCount',
            'stockDiscarded',
        ],
        settings
    )

export const getElementName = (id, list) =>
    findElementById(list, id)?.['displayName' || 'name']

export const populateStockCase = (settings) => ({
    programUid: settings.programUid,
    description: settings.description,
    programType: settings.programType || 'logistics',
    itemCode: settings.itemCode,
    stockOnHand: settings.stockOnHand,
    itemDescription: settings.itemDescription,
    distributedTo:
        settings.distributedTo || settings.transactions[0].distributedTo,
    stockDistributed:
        settings.stockDistributed || settings.transactions[0].stockDistributed,
    stockCorrected:
        settings.stockCorrected || settings.transactions[1].stockCorrected,
    stockCount: settings.stockCount || settings.transactions[1].stockCount,
    stockDiscarded:
        settings.stockDiscarded || settings.transactions[2].stockDiscarded,
})

export const getElementByProgramId = (id, list) =>
    list.find((e) => e.programUid === id)

export const getUnusedPrograms = (programList, programsUsed) =>
    reject(programList, (item) => find(programsUsed, { programUid: item.id }))
