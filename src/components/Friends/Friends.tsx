import React from "react";
import {FriendsItem} from "./FriendsItem/FriendsItem";


type FriendsType = {
    id: number
    name: string
    status: string
}

type SideBarType = {
    friends: Array<FriendsType>
}

const Friends = (props: SideBarType) => {
    let friends = props.friends.map((el, i) => <FriendsItem key={i} name={el.name} status={el.status}/>)
    return (
        <div>
            {friends}
        </div>
    )
}

export default Friends;