import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'
import { client } from '../../api/client'

const initialState = {
  posts: [],
  status: 'idle',  // 'idle', 'loading', 'succeeded', 'failed'
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})

export const newPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
  const response = await client.post('/fakeApi/posts', initialPost)
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
          console.log(postId, newTitle, newContent)
          state = state.posts.map(post => {
            if(post.id === postId){
              post.title = newTitle
              post.content = newContent
            }  
        })
      }
    },
    extraReducers(builder){
      builder
        .addCase(fetchPosts.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status ='succeeded'

          state.posts = state.posts.concat(action.payload)
        }) 
        .addCase(fetchPosts.rejected, (state, action) => {
          state.status ='failed'
          state.error = action.error.message
        })
        .addCase(newPost.fulfilled, (state, action) => {
          action.payload.userId = Number(action.payload.userId)
          action.payload.date = new Date().toISOString()
          state.posts.push(action.payload)
        })
    }
  }
)

export default postsSlice.reducer
export const { addPost, editPost, reactionAdded } = postsSlice.actions

export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, postId) => {
  return state.posts.posts.find(post => post.id === postId)}

export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error