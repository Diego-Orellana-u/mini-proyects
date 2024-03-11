import { useState } from "react"
import { useDispatch } from "react-redux"
import { newPost } from "./PostsSlice"
import { useSelector } from "react-redux"


export default function AddNewPost(){

  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ addRequestStatus, setAddRequestStatus ] = useState('idle')

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const onChangeTitle = (e) => setTitle(e.target.value)

  const onChangeContent = (e) => setContent(e.target.value)

  const onClickUser = (e) => {
    setAuthor(e.target.value)
  }
  const canSave = [title, content, author].every(Boolean) && addRequestStatus === 'idle'

  const onCreateNewPost = () => {
    if(canSave){
      try {
        setAddRequestStatus('pending')
        dispatch(newPost({ title, content, user: author })).unwrap() //unwrap returns a promise

        setTitle('')
        setContent('')
        setAuthor('')
      } catch (error) {
          console.error('Failed to save the post', error)
      } finally{
          setAddRequestStatus('idle')
      }
    }
  }

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

        <select onChange={(e) => onClickUser(e)}>
          <option>Select a user</option>
          {
            users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))
          }
        </select>
        
        <button type="button" onClick={onCreateNewPost} disabled={!canSave}>Create new post</button>
      </form>
    </section>
  )
}