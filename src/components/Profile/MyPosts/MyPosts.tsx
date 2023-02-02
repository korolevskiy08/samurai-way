import c from './MyPosts.module.css'
import Post from './Post/Post'
import { profilePropsType } from './MyPostsContainer'
import {AddPostFormRedux, AddPostFormType} from "./AddPost/AddPost";

export let MyPosts = ({ addPostHandler, postData }: profilePropsType) => {
  const postElements = postData.map((el, i) => {
    return <Post key={i} message={el.message} like={el.like} />
  })

    const addPost = (textMessage: AddPostFormType) => {
        console.log(textMessage)
      addPostHandler(textMessage)
    }

  return (
    <div>
      <div className={c.myPosts}>My posts</div>
      <div className={c.newPost}>
          <AddPostFormRedux onSubmit={addPost}/>
      </div>
      <div className={c.newPost}>New post</div>
      {postElements}
    </div>
  )
}

export default MyPosts
