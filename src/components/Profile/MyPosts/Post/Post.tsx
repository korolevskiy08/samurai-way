import React from "react";
import c from'./Post.module.css';

type Message = {
    message?: string;
    like?: number;
}

let Post = (props: Message) => {
    debugger
    return(
        <div className={c.post}>
            <div className={c.posts}>
                <div className={c.item}>
                    <img src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c8/c804f2b2218dfa312287077102c6077bb0abe45f_full.jpg'/>
                    <div className={c.textPost}>
                        <p>{props.message}</p>
                        <div>
                            <span>Like {props.like}</span>
                        </div>
                    </div>
                </div>
                <div className={c.space}></div>
            </div>
        </div>
    )
}

export default Post;