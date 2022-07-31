import {connect} from "react-redux";
import {RootState} from '../../Redux/redux-store';
import {UsersC} from './UsersC';
import {Dispatch} from "redux";
import {
    followAC,
    ItemsType,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unFollowAC,
} from '../../Redux/users-reducer';

type mapStateToPropsType = {
    items: Array<ItemsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<ItemsType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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

    }
}

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)