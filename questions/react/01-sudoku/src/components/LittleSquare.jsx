import { useBoardContext } from '../hooks/useBoardContext'
import './LittleSquare.css'

export function LittleSquare({ position, positionLit}){

    const { board, setBoard, error } = useBoardContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = e.target.value
        const newBoard = structuredClone(board)
        setBoard(newBoard,
                newBoard[position][positionLit] = data)
    }

    return(
        <div className="little-square">
            <form onChange={handleSubmit} className='form'>
                <label className="label" htmlFor="mini-square">
                    {
                        error && board[position][positionLit]
                    }
                </label>
                {
                    !error && <input name="query" id="mini-square" className="input" autoComplete="off" />
                }
            </form>
        </div>
    )
}