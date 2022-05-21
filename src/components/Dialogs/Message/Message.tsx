import React from "react";
import c from'./Message.module.css';

type MessagePropsType = {
    text: string
}

const Message = (props: MessagePropsType) => {
    return(
        <div>
            <div className={c.message}>{props.text}</div>
        </div>
    )
}

export default Message;