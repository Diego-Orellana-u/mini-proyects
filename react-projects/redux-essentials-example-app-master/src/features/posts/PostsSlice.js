import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action){
        state.push(action.payload)
      },
      prepare(title, content, userId){
        const id = nanoid()
        return{
          payload:{
            id,
            title,
            content,
            userId
          }
        }
      }
    },
    editPost: (state, action) => {
          const { postId, newTitle, newContent } = action.payload
          console.log(postId, newTitle, newContent)
          state = state.map(post => {
            if(post.id === postId){
              post.title = newTitle
              post.content = newContent
            }  
        })
      }
    }
  }
)

export default postsSlice.reducer
export const { addPost, editPost } = postsSlice.actions