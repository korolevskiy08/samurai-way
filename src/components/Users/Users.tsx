import React from 'react'
import { ItemsType } from '../../Redux/users-reducer'
import {Paginator} from "../../command/Paginator/Paginator";
import {User} from "./user";

type UsersType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  followingInProgress: Array<number>
  onPageChanged: (pageNumber: number) => void
  items: Array<ItemsType>
  unFollowThunk: (userId: number) => void
  followThunk: (userId: number) => void
}

const Users = (props: UsersType) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <div>
        <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
        />

        <User
            items={props.items}
            unFollowThunk={props.unFollowThunk}
            followThunk={props.followThunk}
            followingInProgress={props.followingInProgress}
        />
      </div>
  )
}

export default React.memo(Users)
