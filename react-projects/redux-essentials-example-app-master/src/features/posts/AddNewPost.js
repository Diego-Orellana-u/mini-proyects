import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "./PostsSlice"
import { useSelector } from "react-redux"


export default function AddNewPost(){

  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')
  const [ author, setAuthor ] = useState('')

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const onChangeTitle = (e) => setTitle(e.target.value)

  const onChangeContent = (e) => setContent(e.target.value)

  const onClickUser = (user) => setAuthor(user)

  const onCreateNewPost = () => {
    if(title && content){
      dispatch(addPost(
        title,
        content,
        author
      ))
    }

    setTitle('')
    setContent('')
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(author)

  return(
    <section>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input 
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onChangeTitle}
        />

        <label htmlFor="postContent">Content:</label>
        <textarea 
          name="postContent"
          id="postContent"
          value={content}
          onChange={onChangeContent}
        />

        <select>
          <option>Select a user</option>
          {
            users.map(user => (
              <option key={user.id} value={user.name} onClick={() => onClickUser(user)}>{user.name}</option>
            ))
          }
        </select>
        
        <button type="button" onClick={onCreateNewPost} disabled={!canSave}>Create new post</button>
      </form>
    </section>
  )
}