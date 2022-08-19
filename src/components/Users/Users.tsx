import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../assets/UserImg.png'
import { ItemsType } from '../../Redux/users-reducer'
import { NavLink } from 'react-router-dom'

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
              <span
                className={styleNumberPage}
                key={i}
                onClick={(e) => {
                  props.onPageChanged(el)
                }}
              >
                {el + ' '}
              </span>
            )
          })}
        </div>
        {props.items.map((el: any) => {
          const unFollowHandler = () => {
            props.unFollowThunk(el.id)
            console.log(el.id)
          }

          const followHandler = () => {
            props.followThunk(el.id)
            console.log(el.id)
          }

          return (
            <div className={classes.contantContainer} key={el.id}>
              <div>
                <div>
                  <NavLink to={'/profile/' + el.id}>
                    <img
                      style={{ width: '50px' }}
                      src={el.photos.small !== null ? el.photos.small : userPhoto}
                    />
                  </NavLink>
                </div>
                <div>
                  {el.followed ? (
                    <button
                      disabled={props.followingInProgress.some((id: any) => id === el.id)}
                      onClick={unFollowHandler}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={props.followingInProgress.some((id: any) => id === el.id)}
                      onClick={followHandler}
                    >
                      Follow
                    </button>
                  )}
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
        })}
      </div>
    </div>
  )
}

export default Users
