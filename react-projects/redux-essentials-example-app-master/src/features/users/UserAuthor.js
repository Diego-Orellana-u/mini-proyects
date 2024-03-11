import { useSelector } from "react-redux"

export default function UserAuthor({ authorId }){

  const users = useSelector(state => state.users)

  const author = users.find(user => user.id === authorId)
  return(
    <>
      <span>Post by: {author ? author.name : 'Unknown Author'}</span>
    </>
  )
}