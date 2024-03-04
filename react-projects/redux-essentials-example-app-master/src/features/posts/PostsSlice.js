import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})



const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const actualPost = state.posts.find(post => post.id === postId)
      if(actualPost){
        actualPost.reactions[reaction]++  //selecting the clicked reaction in the reactions array
      }
    },
    addPost: {
      reducer(state, action){
        state.posts.push(action.payload)
      },
      prepare(title, content, author){
        const id = nanoid()
        return{
          payload:{
            id,
            date: new Date().toISOString(),
            title,
            content,
            author, 
            reactions: initialState[0].reactions,
          }
        }
      }
    },
    editPost: (state, action) => {
          const { postId, newTitle, newContent } = action.payload
          state = state.posts.map(post => {
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
export const { addPost, editPost, reactionAdded } = postsSlice.actions

export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)