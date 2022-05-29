import React from "react";
import c from './FriendsItem.module.css'


type FriendsType = {
    id?: number
    name: string
    status: string
}

export let FriendsItem = (props: FriendsType) => {
    return (
        <div className={c.friends}>
            <div className={c.avatarFriends}>
                <img src={'https://img.kupigolos.ru/hero/5d34e459bfb8d.jpg?p=bh&s=7113794550e601bc87758f039e8e00c1'} />
            </div>
            <div className={c.discription}>
                <div>
                   <span>{props.name}</span>
                </div>
                <div>
                    <span>{props.status}</span>
                </div>
            </div>
        </div>
    )
}