import React from "react";
import c from'./Post.module.css';

let Post = () => {
    return(
        <div>
            <div className={c.posts}>
                <div className={c.item}>
                    post 1
                </div>
                <div className={c.item}>
                    post 2
                </div>
            </div>
        </div>
    )
}

export default Post;