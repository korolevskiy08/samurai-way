import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../Redux/redux-store'
import {
  followAC,
  followThunkCreator,
  getUsersThunkCreator,
  unFollowAC,
  unFollowThunkCreator,
} from '../../Redux/users-reducer'
import { Component, FC } from 'react'
import Users from './Users'
import { Preloader } from '../common/Preloader/Preloader'
import { compose } from 'redux'

export type usersPropsType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: RootState) => {
  return {
    items: state.usersPage.items,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID))
    },
    unFollow: (userID: number) => {
      dispatch(unFollowAC(userID))
    },
    getUsers: (currentPage: number, pageSize: number) => {
      dispatch(getUsersThunkCreator(currentPage, pageSize))
    },
    unFollowThunk: (userId: number) => {
      dispatch(unFollowThunkCreator(userId))
    },
    followThunk: (userId: number) => {
      dispatch(followThunkCreator(userId))
    },
  }
}

export class UsersContainer extends Component<usersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          items={this.props.items}
          followingInProgress={this.props.followingInProgress}
          unFollowThunk={this.props.unFollowThunk}
          followThunk={this.props.followThunk}
        />
      </>
    )
  }
}

export const UsersComponent = compose<FC>(connect(mapStateToProps, mapDispatchToProps))(
  UsersContainer
)
