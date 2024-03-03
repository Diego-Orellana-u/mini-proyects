import { useSelector } from "react-redux"
import UserAuthor from "../users/UserAuthor"


export default function IndividualPost({match}){

  const { postId } = match.params

  const post = useSelector(state => 
    state.posts.find(post => post.id === postId)
    )

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
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}