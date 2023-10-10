import { useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { Button, ButtonStrip } from '@dhis2/ui'
import React, { useState } from 'react'
import { NAMESPACE } from '../../shared'
import { DialogEraseValues } from './DialogEraseValues'
import styles from './EraseValues.module.css'

const deleteDataStoreMutation = {
    resource: `dataStore/${NAMESPACE}`,
    type: 'delete',
}

export const EraseValues = () => {
    const [mutate] = useDataMutation(deleteDataStoreMutation)
    const [openDialog, setOpenDialog] = useState(false)

    const onClose = () => {
        setOpenDialog(false)
    }

    const deleteNamespaceDatastore = async () => {
        onClose()
        await mutate()
        location.reload()
    }

    return (
        <ButtonStrip className={styles.section}>
            <Button onClick={() => setOpenDialog(true)} destructive>
                {i18n.t('Erase all settings')}
            </Button>

            <DialogEraseValues
                onClose={onClose}
                deleteNamespace={deleteNamespaceDatastore}
                openDialog={openDialog}
            />
        </ButtonStrip>
    )
}
