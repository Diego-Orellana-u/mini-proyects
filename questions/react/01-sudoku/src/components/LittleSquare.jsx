import './LittleSquare.css'

export function LittleSquare({ position, positionLit, setBoard, board, error }){

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = e.target.value
        console.log(position)
        const newBoard = structuredClone(board)
        setBoard(newBoard,
                newBoard[position][positionLit] = data)
    }

    return(
        <div className="little-square">
            <form onChange={handleSubmit} className='form'>
                <label className="label" htmlFor="mini-square">
                    {error === 'Correct!' && board[position][positionLit]}
                </label>
                {
                    error === null && <input name="query" id="mini-square" className="input" autoComplete="off" />
                }
            </form>
        </div>
    )
}