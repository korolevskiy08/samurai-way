import {connect} from "react-redux";
import {AppDispatch, RootState} from '../../Redux/redux-store';
import {
    followAC, followThunkCreator, getUsersThunkCreator,
    ItemsType,
    setCurrentPageAC,
    toggleIsFetchingAC,
    unFollowAC, unFollowThunkCreator,
} from '../../Redux/users-reducer';
import React from "react";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type mapStateToPropsType = {
    items: Array<ItemsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unFollowThunk: (userId: number) => void
    followThunk: (userId: number) => void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        toggleIsFetchingAC: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },

        getUsers: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        unFollowThunk: (userId: number) => {
            dispatch(unFollowThunkCreator(userId))
        },
        followThunk: (userId: number) => {
            dispatch(followThunkCreator(userId))
        }
    }
}

export class UsersContainer extends React.Component<usersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   items={this.props.items}
                   followingInProgress={this.props.followingInProgress}
                   unFollowThunk={this.props.unFollowThunk}
                   followThunk={this.props.followThunk}
            />
        </>
    }
}

export const UsersComponent = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
