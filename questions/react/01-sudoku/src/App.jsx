import { useState } from 'react'
import './App.css'
import { Row } from './components/Row'
import { obtainSolution } from './js/obtainSolution'


export default function App() {
  const [ board, setBoard ] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])

  const [ error, setError ] = useState(null)
  
  async function handleSolution(){
    const newBoard = board.map(arr => arr.join('')).join('')

    const solutionData = await obtainSolution(newBoard)

    if(solutionData.status === 'error'){
      setError(false)
    }else if(solutionData.status === 'OK'){
      setError(true)
    }

    const boardSolution = structuredClone(board)
    let k = 0
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        boardSolution[i][j] = solutionData.solution[k]
        k++
      }
    }
    setBoard(boardSolution)
  }

  return (
    <>
      <div className='board'>
        {
          board.map((row, index) => {
            return(
              // here key shouldn't be index, it could create unexpected behaviour.
              <Row position={index} key={index} setBoard={setBoard} board={board} error={error}/>
            )
          })
        }
      </div>
      <div>
        <button className='check-button' onClick={handleSolution}>Check Solution</button>
      </div>
    </>
  )
}
