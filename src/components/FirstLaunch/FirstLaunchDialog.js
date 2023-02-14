import { useConfig } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import {
    Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
    ButtonStrip,
    Button,
} from '@dhis2/ui'
import React from 'react'
import styles from './FirstLaunchDialog.module.css'

export const FirstLaunchDialog = ({ handleSave }) => {
    const { baseUrl } = useConfig()
    const path = '/dhis-web-commons-about/redirect.action'
    const initialUrl = `${baseUrl}${path}`

    return (
        <Modal position="middle">
            <ModalTitle>{i18n.t('First time setup')}</ModalTitle>
            <ModalContent>
                <p>
                    {i18n.t(
                        'Using the Use Cases app will apply default settings to all Android devices connected to this instance.'
                    )}
                </p>

                <strong>
                    {i18n.t(
                        "Any settings or configuration on a user's device will be overwritten by settings applied here."
                    )}
                </strong>

                <p>
                    {i18n.t(
                        'To set up the default settings and apply to all devices, click "Set default and save"'
                    )}
                </p>
            </ModalContent>
            <ModalActions>
                <ButtonStrip end>
                    <Button>
                        <a href={initialUrl} className={styles.button_redirect}>
                            {i18n.t('Exit, do not apply settings')}
                        </a>
                    </Button>
                    <Button primary onClick={handleSave}>
                        {i18n.t('Set defaults and save')}
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}
