import React, {ChangeEvent, KeyboardEventHandler, useState} from 'react'
import Greeting from './Greeting'

import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    let [name, setName] = useState<string>('') // need to fix any
    let [error, setError] = useState<any>('') // need to fix any


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimName = e.currentTarget.value.trim()// need to fix
        if (trimName) {
            setName(trimName)
            setError('')
        } else {
            setError('need name')
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`'Hello', ${name}`)
        setName('')
    }


    const totalUsers = users.length // need to fix


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
