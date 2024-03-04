import { useSelector } from "react-redux"
import UserAuthor from "../users/UserAuthor"
import TimeAgo from "./TimeAgo"
import { selectPostById } from "./PostsSlice";

export default function IndividualPost({match}){

  const { postId } = match.params

  const post = useSelector(state => selectPostById(state, postId))

  if(!post){
    return(
      <section>
        <h2>Post Not Found!</h2>
      </section>
    )
  }

  return(
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <UserAuthor author={post.userId} />
        <TimeAgo timeStamp={post.date} />
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}