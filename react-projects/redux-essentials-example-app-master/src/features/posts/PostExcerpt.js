import { Link } from "react-router-dom/cjs/react-router-dom"
import UserAuthor from "../users/UserAuthor"
import ReactionButtons from "./ReactionButtons"
import TimeAgo from "./TimeAgo"


const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt">
      <div>
        <h3>{post.title}</h3> 
        <UserAuthor authorId={post.user} />
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
  )
}

export default PostExcerpt
