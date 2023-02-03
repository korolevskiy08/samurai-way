import {connect} from 'react-redux'
import {AppDispatch, RootState} from '../../Redux/redux-store'
import {followAC, followThunkCreator, getUsersThunkCreator, unFollowThunkCreator,} from '../../Redux/users-reducer'
import {Component, FC} from 'react'
import Users from './Users'
import {Preloader} from '../common/Preloader/Preloader'
import {compose} from 'redux'
import {
    getCurrentPage,
    getFollowInProgress,
    getIsFetching,
    getItems,
    getPageSize,
    getTotalCount,
} from "../../Redux/users-selectors";

export type usersPropsType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: RootState) => ({
    items: getItems(state),
    // items: superSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowInProgress(state),
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    follow: (userID: number) => {
      dispatch(followAC(userID))
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
})

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
        {this.props.isFetching
            ? <Preloader/>
            : <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                items={this.props.items}
                followingInProgress={this.props.followingInProgress}
                unFollowThunk={this.props.unFollowThunk}
                followThunk={this.props.followThunk}
            />
        }
      </>
    )
  }
}

export const UsersComponent = compose<FC>(connect(mapStateToProps, mapDispatchToProps))(
  UsersContainer
)
