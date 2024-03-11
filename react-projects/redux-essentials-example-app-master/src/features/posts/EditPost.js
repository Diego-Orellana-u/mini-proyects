import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editPost, selectPostById } from "./PostsSlice"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function ModifyPost({ match }){

  const { postId } = match.params

  const post = useSelector(state => selectPostById(state, postId))
  
  const dispatch = useDispatch()
  const history = useHistory()

  const [ newTitle, setNewTitle ] = useState(post.title)
  const [ newContent, setNewContent ] = useState(post.content)

  const onChangeNewTitle = (e) => setNewTitle(e.target.value)
  const onChangeNewContent = (e) => setNewContent(e.target.value)

  const handleEditPost = () => {
    if(newTitle && newContent){
      dispatch(editPost({
        postId,
        newTitle,
        newContent
      }))

      history.push(`/posts/${postId}`)
    }
  }

  return(
    <section>
      <form>
        <label htmlFor="editTitle">Title:</label>
        <input 
          type="text"
          name="editTitle"
          id="editTitle"
          value={newTitle}
          onChange={onChangeNewTitle}
        />

        <label htmlFor="editContent">Content:</label>
        <textarea 
          name="editContent"
          id="editContent"
          value={newContent}
          onChange={onChangeNewContent}
        />

        <button type="button" onClick={handleEditPost}>Submit Changes</button>
      </form>
    </section>
  )
}