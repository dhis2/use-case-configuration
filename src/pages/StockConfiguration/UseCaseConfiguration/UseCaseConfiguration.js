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
    edit = false,
    selectedRow,
}) => {
    const { programData } = useLogisticsElements()
    const [settings, setSettings] = useState(defaultStockCase())
    const [disableSave, setDisable] = useState()
    const validElement = programData
        ? findElementById(programData, settings.programUid)
        : []

    useEffect(() => {
        if (edit) {
            setSettings(selectedRow)
        }
    }, [edit])

    // validate if every field was filled
    useEffect(() => {
        setDisable(validMandatoryFields(settings) === true)
    }, [settings])

    const onSave = () => {
        const currentElements = edit
            ? useCases.map((element) =>
                  element.programUid === settings.programUid
                      ? settings
                      : element
              )
            : [...useCases, settings]

        const dataStore = currentElements.map((element) =>
            populateSettingsDataStore(element)
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
                    useCases={useCases}
                    edit={edit}
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
