import React, {FC} from 'react';
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/UserImg.png";
import {ItemsType} from "../../Redux/users-reducer";

type UserType = {
    items: Array<ItemsType>
    unFollowThunk: (userId: number) => void
    followThunk: (userId: number) => void
    followingInProgress: Array<number>
}

export const User:FC <UserType>= ({items, unFollowThunk, followThunk, followingInProgress}) => {
    return (
        <div>
            {items.map((el: any) => {
                const unFollowHandler = () => {
                    unFollowThunk(el.id)
                }

                const followHandler = () => {
                    followThunk(el.id)
                }

                return (
                    <div className={classes.contantContainer} key={el.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + el.id}>
                                    <img
                                        style={{ width: '50px' }}
                                        src={el.photos.small !== null ? el.photos.small : userPhoto}
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {el.followed ? (
                                    <button
                                        disabled={followingInProgress.some((id: any) => id === el.id)}
                                        onClick={unFollowHandler}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        disabled={followingInProgress.some((id: any) => id === el.id)}
                                        onClick={followHandler}
                                    >
                                        Follow
                                    </button>
                                )}
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
            })}
        </div>
    );
};

