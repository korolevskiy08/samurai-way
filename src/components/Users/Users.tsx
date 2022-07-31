import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/UserImg.png";
import {ItemsType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    items: Array<ItemsType>
    unFollow: (userID: number) => void
    follow: (userID: number) => void
}

const Users = (props: UsersType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                <div>

                    {pages.map((el, i) => {
                        let styleNumberPage = props.currentPage === el ? classes.selectedPage : ''
                        return (
                            <span className={styleNumberPage}
                                  key={i}
                                  onClick={(e) => {props.onPageChanged(el)}}>{el}</span>
                        )
                    })}

                </div>
                {
                    props.items.map((el: any) => {

                        const unFollowHandler = () => props.unFollow(el.id)
                        const followHandler = () => props.follow(el.id)
                        return (
                            <div className={classes.contantContainer}>
                                <div>
                                    <div>
                                        <NavLink to={'/profile/' + el.id}>
                                            <img
                                                style={{width: '50px'}}
                                                src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                                        </NavLink>

                                    </div>
                                    <div>
                                        {el.followed
                                            ? <button onClick={unFollowHandler}>Unfollow</button>
                                            : <button onClick={followHandler}>Follow</button>}
                                    </div>
                                </div>
                                <div className={classes.discription}>
                                    <div>
                                        <div>{el.name}</div>
                                        <div>{el.status}</div>
                                    </div>
                                    <div>
                                        <div>{'el.location.country'}</div>
                                        <div>{'el.location.city'}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Users;