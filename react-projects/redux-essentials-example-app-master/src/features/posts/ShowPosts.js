import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import UserAuthor from "../users/UserAuthor";

export default function ShowPosts(){

  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article key={post.id} className="post-excerpt">
      <div>
        <h3>{post.title}</h3> 
        <UserAuthor author={post.userId} />
      </div>
      <p className="post-content">{post.content.substring(0,100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <Link to={`/editPost/${post.id}`} className="button edit-button">
        Edit Post
      </Link>
    </article>
  ))

  return(
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )

}