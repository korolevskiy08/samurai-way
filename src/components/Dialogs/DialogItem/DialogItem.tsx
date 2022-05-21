import React from "react";
import c from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string,
    id: number,
}

const DialogItem = (props: DialogItemPropsType) => {

    let path = 'dialogs/' + props.id;

    return (
        <div>
            <div className={c.dialog + ' ' + c.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;