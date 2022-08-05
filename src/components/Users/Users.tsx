import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/UserImg.png";
import {ItemsType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    items: Array<ItemsType>
    unFollow: (userID: number) => void
    follow: (userID: number) => void
    toggleFollowingProgress:(isFetching: boolean, userId: number) => void
}

const Users = (props: UsersType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    pages.length = 9
    if (props.currentPage > 4) {
        pages[0] = props.currentPage - 4
        pages[1] = props.currentPage - 3
        pages[2] = props.currentPage - 2
        pages[3] = props.currentPage - 1
        pages[4] = props.currentPage
        pages[5] = props.currentPage + 1
        pages[6] = props.currentPage + 2
        pages[7] = props.currentPage + 3
        pages[8] = props.currentPage + 4
    } else if (props.currentPage === pages.length) {
        pages[0] = props.currentPage - 2
        pages[1] = props.currentPage - 1
        pages[2] = props.currentPage
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
                                  onClick={(e) => {
                                      props.onPageChanged(el)
                                  }}>{el + ' '}</span>
                        )
                    })}

                </div>
                {
                    props.items.map((el: any) => {
                        const unFollowHandler = () => {
                        props.toggleFollowingProgress(true, el.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "6a186eca-b950-4867-b1d4-cf6c7447fc05"
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unFollow(el.id)
                                }
                                props.toggleFollowingProgress(false, el.id)
                            })
                        }

                        const followHandler = () => {
                            props.toggleFollowingProgress(true, el.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "6a186eca-b950-4867-b1d4-cf6c7447fc05"
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(el.id)
                                }
                                props.toggleFollowingProgress(false, el.id)
                            })

                        }

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
                                            ? <button disabled={props.followingInProgress.some((id:any) => id === el.id)} onClick={unFollowHandler}>Unfollow</button>
                                            : <button disabled={props.followingInProgress.some((id:any) => id === el.id)} onClick={followHandler}>Follow</button>

                                        }

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