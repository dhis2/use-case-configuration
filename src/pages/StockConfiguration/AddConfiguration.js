import i18n from '@dhis2/d2-i18n'
import { Tooltip } from '@dhis2/ui'
import isEmpty from 'lodash/isEmpty'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { AddButton, Button } from '../../components'
import styles from '../../components/Button/Button.module.css'
import { getUnusedPrograms } from './helper'
import { useLogisticPrograms } from './logisticHelper'
import { UseCaseConfiguration } from './UseCaseConfiguration'

const AddConfiguration = ({ useCases, handleUseCases }) => {
    const { programs } = useLogisticPrograms()
    const [open, setOpen] = useState(false)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (programs) {
            setDisabled(!!isEmpty(getUnusedPrograms(programs, useCases)))
        }
    }, [useCases])

    const createConfiguration = () => {
        setOpen(true)
    }

    return (
        <>
            <>
                {disabled ? (
                    <Tooltip
                        content={i18n.t(
                            'All programs to be configured are already in use'
                        )}
                        placement="right"
                    >
                        <Button
                            small
                            className={styles.marginTB24}
                            title={i18n.t('Add Program')}
                            disabled={disabled}
                            onClick={createConfiguration}
                        />
                    </Tooltip>
                ) : (
                    <AddButton
                        onClick={createConfiguration}
                        element="Program"
                    />
                )}
            </>

            {open && (
                <UseCaseConfiguration
                    useCases={useCases}
                    handleUseCases={handleUseCases}
                    handleOpen={setOpen}
                />
            )}
        </>
    )
}

AddConfiguration.propTypes = {
    useCases: PropTypes.array,
    handleUseCases: PropTypes.func,
}

export default AddConfiguration
