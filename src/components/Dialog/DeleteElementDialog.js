import i18n from '@dhis2/d2-i18n'
import {
    Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
    ButtonStrip,
    Button,
} from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'

export const DeleteElementDialog = ({
    open,
    onClose,
    onDelete,
    elementName,
}) => (
    <>
        {open && (
            <Modal small position="middle" onClose={onClose}>
                <ModalTitle>
                    {i18n.t('Delete logistic configuration')}
                </ModalTitle>
                <ModalContent>
                    {i18n.t(
                        'Are you sure you want to delete {{name}} configuration?',
                        { name: elementName }
                    )}
                </ModalContent>
                <ModalActions>
                    <ButtonStrip end>
                        <Button onClick={onClose}>{i18n.t('Cancel')}</Button>
                        <Button onClick={onDelete} destructive>
                            {i18n.t('Delete')}
                        </Button>
                    </ButtonStrip>
                </ModalActions>
            </Modal>
        )}
    </>
)

DeleteElementDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onDelete: PropTypes.func,
    elementName: PropTypes.string,
}
