import React from 'react';
import {usersPropsType} from './UsersContainer';
import classes from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/UserImg.png'



export class UsersC extends React.Component<any, any>{

    // getUsers = () => {
    //     if (this.props.items.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    //     }
    // }

    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                {
                    this.props.items.map((el: any) => {

                        const unFollowHandler = () => this.props.unFollow(el.id)
                        const followHandler = () => this.props.follow(el.id)
                        return (
                            <div className={classes.contantContainer}>
                                <div>
                                    <div>
                                        <img
                                            style={{width: '50px'}}
                                            src={el.photos.small !== null ? el.photos.small : userPhoto}/>
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
        )
    }
}