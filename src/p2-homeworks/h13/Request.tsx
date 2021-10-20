import React, {ChangeEvent, useState} from 'react'
import {authAPI} from './api/requestAPI'
import {Simulate} from 'react-dom/test-utils'

function Request() {
    const [checkbox, setCheckbox] = useState(false)
    const [view, setView] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckbox(e.currentTarget.checked)
    }

    const handleSendButton = async () => {
        try {
            const response: any = await authAPI.test({success: checkbox})
            setView(response.data.info)
        } catch (error) {
            setView(error.message)
        }
    }

    return (
        <div>
            <input type="checkbox" checked={checkbox} onChange={handleChange}/>
            <input type="button" value={'Send'} onClick={handleSendButton}/>
            <div>{view}</div>
        </div>
    )
}

export default Request
