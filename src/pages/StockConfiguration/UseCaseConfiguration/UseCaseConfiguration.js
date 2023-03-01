import i18n from '@dhis2/d2-i18n'
import {
    Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
    ButtonStrip,
} from '@dhis2/ui'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Button } from '../../../components'
import {
    defaultStockCase,
    findElementById,
    populateSettingsDataStore,
    validMandatoryFields,
} from '../helper'
import { useLogisticsElements } from '../logisticHelper'
import { Sections } from './Sections'

export const UseCaseConfiguration = ({
    useCases,
    handleUseCases,
    handleOpen,
}) => {
    const { programData } = useLogisticsElements()
    const [settings, setSettings] = useState(defaultStockCase())
    const [validElement, setElement] = useState([])
    const [disableSave, setDisable] = useState()

    // validate if every field was filled
    useEffect(() => {
        setDisable(validMandatoryFields(settings) === true)
        if (settings.programUid && programData) {
            setElement(findElementById(programData, settings.programUid))
        }
    }, [settings])

    const onSave = () => {
        const dataStore = []
        const currentElements = [...useCases, settings]
        currentElements.forEach((element) =>
            dataStore.push(populateSettingsDataStore(element))
        )
        handleUseCases(dataStore)
        onCancel()
    }

    const onCancel = () => {
        setSettings(defaultStockCase())
        handleOpen(false)
    }

    return (
        <Modal large>
            <ModalTitle>{i18n.t('Configure Program')}</ModalTitle>
            <ModalContent>
                <Sections
                    settings={settings}
                    handleSettings={setSettings}
                    element={validElement}
                />
            </ModalContent>
            <ModalActions>
                <ButtonStrip end>
                    <Button
                        onClick={onCancel}
                        secondary
                        title={i18n.t('Cancel')}
                    />
                    <Button
                        onClick={onSave}
                        primary
                        title={i18n.t('Save')}
                        disabled={disableSave}
                    />
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}

UseCaseConfiguration.propTypes = {
    useCases: PropTypes.array,
    handleUseCases: PropTypes.func,
    handleOpen: PropTypes.func,
}
