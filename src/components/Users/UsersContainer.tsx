import react from 'react';
import {connect} from "react-redux";
import { RootState } from '../../Redux/redux-store';
import { UsersComponent } from './UsersComponent';
import {Dispatch} from "redux";
import { followAC, initialStateType, setUsersAC, unFollowAC, UserType } from '../../Redux/users-reducer';

type mapStateToPropsType = {
    users: Array<UserType>
}

type mapDispatchToPropsType = {
    follow: (userID:number) => void
    unFollow: (userID: number) => void
    setUsers: (users: initialStateType) => void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState):mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userID:number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: any) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)