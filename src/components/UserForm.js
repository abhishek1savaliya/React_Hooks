import React, { useState } from 'react'
import useInput from '../hooks/useInput'

function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindlastName, resetlastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetlastName()

    }
    return (
        <div>
            <form onSubmit={submitHandler} >
                <div>
                    <label>First Name</label>
                    <input {...bindFirstName}  type="text" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input  {...bindlastName} type="text" />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
