import React from "react";
import {FriendsItem} from "./FriendsItem/FriendsItem";
import StoreContext from "../../store.context";


const Friends = () => {
    return (
        <div>
            <StoreContext.Consumer>
                {
                (store) => {
                    let friends = store.getState().sideBar.friends.map((el, i) => <FriendsItem key={i} name={el.name} status={el.status}/>)

                    return (
                        {friends}
                    )
                }
            }

            </StoreContext.Consumer>

        </div>
    )
}

export default Friends;