import React, {FC, useEffect, useState} from 'react';
import classes from "../../components/Users/Users.module.css";
import style from './paginator.module.css'

type PaginatorType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: FC<PaginatorType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pages = []

    useEffect(()=>setPortionNumber(Math.ceil(currentPage/pageSize)), [currentPage]);

    const pageCount = Math.ceil(totalUsersCount / pageSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber -1) * pageSize + 1;
    const rightPortionPageNumber = portionNumber * pageSize

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.paginator}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((el, i) => {
                let styleNumberPage = currentPage === el ? classes.selectedPage : ''
                return (
                    <span
                        className={styleNumberPage}
                        key={i}
                        onClick={(e) => {
                            onPageChanged(el)
                        }}
                    >
                {el + ' '}
              </span>
                )
            })}
            {currentPage > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    );
};


