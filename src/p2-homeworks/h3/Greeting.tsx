import React from 'react'
import s from './Greeting.module.css'
import {v1} from "uuid";

type GreetingPropsType = {
    name: string
    setNameCallback: any
    addUser: () => void
    error: string // need to fix any
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,} // деструктуризация пропсов
) => {
    const inputClass = error? s.error : s.someClass // need to fix with (?:)

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
            />
            <span>{error}</span>
            <button onClick={addUser}>addUsers</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting

// const addItem = () => {
//     if (title.trim() !== "") {
//         props.addItem(title);
//         setTitle("");
//     } else {
//         setError("Title is required");
//     }
// }

// const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.currentTarget.value)
// }
//
// const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
//     if (error !== null) {
//         setError(null);
//     }
//     if (e.charCode === 13) {
//         addItem();
//     }