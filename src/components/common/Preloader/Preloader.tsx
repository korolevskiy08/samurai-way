import React from 'react'
import style from '../../Users/UsersContainer.module.css'
import preloader from '../../../assets/Preloader.gif'

export const Preloader = () => {
  return (
    <div>
      <img className={style.imgPreloader} src={preloader} />
    </div>
  )
}
