import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import UserAuthor from "../users/UserAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { fetchPosts, selectAllPosts } from "./PostsSlice";
import { useEffect } from "react";

export default function ShowPosts(){
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector(state => state.posts.status)

  useEffect(() => {
    if(postStatus === 'idle'){
      dispatch(fetchPosts)
    }
  }, [postStatus, dispatch])

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => (
    <article key={post.id} className="post-excerpt">
      <div>
        <h3>{post.title}</h3> 
        <UserAuthor author={post.author} />
        <TimeAgo timeStamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0,100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <Link to={`/editPost/${post.id}`} className="button edit-button">
        Edit Post
      </Link>
      <div>
        <ReactionButtons post={post} />
      </div>
    </article>
  ))

  return(
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )

}