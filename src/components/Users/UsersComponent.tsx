import React from 'react';
import { usersPropsType } from './UsersContainer';
import classes from './Users.module.css';



export const UsersComponent = (props: usersPropsType) => {
    return (
        <div>
            {
                props.users.map(el => {

                    const unFollowHandler = () => props.unFollow(el.id)
                    const followHandler = () => props.follow(el.id)
                    return (
                      <div className={classes.contantContainer}>
                        <div>
                            <div>
                                <img
                                style={{width: '50px'}}
                                src={el.photoURL}/>
                            </div>
                            <div>
                                {el.followed 
                                ? <button
                                onClick={unFollowHandler}
                                >Unfollow</button>
                                : <button
                                onClick={followHandler}
                                >Follow</button>}
                            </div>
                        </div>
                        <div className={classes.discription}>
                            <div>
                                <div>{el.fullName}</div>
                                <div>{el.status}</div>
                            </div>
                            <div>
                                <div>{el.location.country}</div>
                                <div>{el.location.city}</div>
                            </div>
                        </div>
                      </div>
                    )
                })
            }
        </div>
    )
}