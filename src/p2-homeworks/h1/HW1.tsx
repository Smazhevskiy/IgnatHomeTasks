import React from 'react'
import Message from "./Message";


export type TypeMessageData = {
    avatar: string
    name: string
    message: string
    time: string
}

export const messageData: TypeMessageData = {
    avatar: 'https://images.chesscomfiles.com/uploads/v1/user/75372640.5116a1ac.1200x1200o.526a857d8258.png',
    name: 'Atrem',
    message: 'npm nazhmimal а если найду бла бал бауваувацулдаоуцал аоулаоудлаоу ауолаоудшл?',
    time: '22:02',
}

function HW1() {
    return (
        <div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1