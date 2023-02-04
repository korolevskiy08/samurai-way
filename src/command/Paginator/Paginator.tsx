import React, {FC} from 'react';
import classes from "../../components/Users/Users.module.css";

type PaginatorType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: FC<PaginatorType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((el, i) => {
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
        </div>
    );
};


