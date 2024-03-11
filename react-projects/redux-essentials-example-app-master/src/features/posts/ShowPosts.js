import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import UserAuthor from "../users/UserAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { fetchPosts, selectAllPosts, getPostsStatus, getPostsError } from "./PostsSlice";
import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";


export default function ShowPosts(){
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])
  
  let content
  if (postStatus === 'loading') {
    // content = <Spinner text="Loading..." />
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))

    content = orderedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }


  return(
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )

}