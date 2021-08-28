import React from 'react'
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <div><img src={props.avatar} alt="avatar" className={s.avatar}/></div>
            <div className={s.angle}/>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <span className={s.message}>{props.message}</span>
                <span className={s.time}> {props.time}</span>
            </div>
        </div>
    )
}

export default Message
