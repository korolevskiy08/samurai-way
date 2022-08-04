import {connect} from "react-redux";
import {RootState} from '../../Redux/redux-store';
import {Dispatch} from "redux";
import {
    followAC,
    ItemsType,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowAC,
} from '../../Redux/users-reducer';
import axios from "axios";
import React from "react";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type mapStateToPropsType = {
    items: Array<ItemsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<ItemsType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<ItemsType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFetchingAC: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export class UsersContainer extends React.Component<usersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true
        }).then(response => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetchingAC(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials: true
        }).then(response => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   items={this.props.items}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
            />
        </>
    }
}

export const UsersComponent = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
