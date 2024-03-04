import { useDispatch } from "react-redux"
import { reactionAdded } from "./PostsSlice"

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export default function ReactionButtons({ post }){

  const dispatch = useDispatch()

  const onClickEmoji = (name) => {
    dispatch(reactionAdded({
      postId: post.id,
      reaction: name
    }
    ))
  }


  const reactionBtns = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return(
      <button key={name} onClick={() => onClickEmoji(name)} type="button" className="muted-button reaction-button">
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return (
    <div>{reactionBtns}</div>
  )
}

