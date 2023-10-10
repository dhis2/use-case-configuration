import i18n from '@dhis2/d2-i18n'
import {
    Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
    Button,
    ButtonStrip,
} from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'

export const DialogEraseValues = ({ openDialog, deleteNamespace, onClose }) => (
    <>
        {openDialog && (
            <Modal small position="middle" onClose={onClose}>
                <ModalTitle>{i18n.t('Erase all settings')}</ModalTitle>
                <ModalContent>
                    {i18n.t(
                        'This action will remove all settings. Are you sure you want to erase all content and settings?'
                    )}
                </ModalContent>
                <ModalActions>
                    <ButtonStrip end>
                        <Button onClick={onClose}>{i18n.t('Cancel')}</Button>
                        <Button onClick={deleteNamespace} destructive>
                            {i18n.t('Erase')}
                        </Button>
                    </ButtonStrip>
                </ModalActions>
            </Modal>
        )}
    </>
)

DialogEraseValues.propTypes = {
    deleteNamespace: PropTypes.func.isRequired,
    openDialog: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}
