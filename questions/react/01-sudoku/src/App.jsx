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
      setError(`Error, ${solutionData.message}`)
    }else if(solutionData.status === 'OK'){
      setError(`Correct!`)
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
          
        }
        <Row position={0} setBoard={setBoard} board={board} error={error}/>
        <Row position={1} setBoard={setBoard} board={board} error={error}/>
        <Row position={2} setBoard={setBoard} board={board} error={error}/>
        <Row position={3} setBoard={setBoard} board={board} error={error}/>
        <Row position={4} setBoard={setBoard} board={board} error={error}/>
        <Row position={5} setBoard={setBoard} board={board} error={error}/>
        <Row position={6} setBoard={setBoard} board={board} error={error}/>
        <Row position={7} setBoard={setBoard} board={board} error={error}/>
        <Row position={8} setBoard={setBoard} board={board} error={error}/>
      </div>
      <div>
        <p>Your result: {error}</p>
        <button className='check-button' onClick={handleSolution}>Check Solution</button>
      </div>
    </>
  )
}
