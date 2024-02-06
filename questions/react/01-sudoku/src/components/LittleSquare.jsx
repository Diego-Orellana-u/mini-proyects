import { useBoardContext } from '../hooks/useBoardContext'
import './LittleSquare.css'

export function LittleSquare({ positionY, positionX}){

    const { board, setBoard, error } = useBoardContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = e.target.value
        const newBoard = structuredClone(board)
        setBoard(newBoard,
                newBoard[positionY][positionX] = data)
    }

    return(
        <div className="little-square">
            <form onChange={handleSubmit} className='form'>
                <label className="label" htmlFor="mini-square">
                    {
                        error && board[positionY][positionX]
                    }
                </label>
                {
                    !error && <input name="query" id="mini-square" className="input" autoComplete="off" />
                }
            </form>
        </div>
    )
}