import {RootState} from "./redux-store";
// import {createSelector} from "reselect";



export const getItems = (state: RootState) => {
    return state.usersPage.items
}

// export const superSelector = createSelector(getItems, (users) => {
//    return users.filter(u => true)
// })

export const getPageSize = (state: RootState) => {
    return state.usersPage.pageSize
}

export const getTotalCount = (state: RootState) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootState) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootState) => {
    return state.usersPage.isFetching
}

export const getFollowInProgress = (state: RootState) => {
    return state.usersPage.followingInProgress
}
