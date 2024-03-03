import { increment, decrement } from "./counterSlice";
import { useSelector, useDispatch } from 'react-redux'

export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return(
    <div>
      <div className="counter__container">
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
      </div>
    </div>
  )
}