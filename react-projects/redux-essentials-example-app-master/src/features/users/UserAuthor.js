
export default function UserAuthor({ author }){

  return(
    <>
      <span>Post by: {author ? author.name : 'Unknown Author'}</span>
    </>
  )
}