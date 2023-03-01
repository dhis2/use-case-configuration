import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AddButton } from '../../components'
import { UseCaseConfiguration } from './UseCaseConfiguration'

const AddConfiguration = ({ useCases, handleUseCases }) => {
    const [open, setOpen] = useState(false)

    const createConfiguration = () => {
        setOpen(true)
    }

    return (
        <>
            <AddButton onClick={createConfiguration} element="Program" />

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
