import { useId } from 'react'
import './App.css'
import { Row } from './components/Row'
import { obtainSolution } from './js/obtainSolution'
import { createBoardSolution } from './js/createBoardSolution'
import { useBoardContext } from './hooks/useBoardContext'


export default function App() {

  const { board, setBoard, setError } = useBoardContext()

  const idTest = useId()
  
  async function getSolution(){
    const userInputs = board.map(arr => arr.join('')).join('')
    console.log(userInputs)

    const solutionData = await obtainSolution(userInputs)
    const boardSolution = createBoardSolution(board, solutionData)
    setBoard(boardSolution)

    solutionData.status === 'OK' ? setError(true) : setError(false)
    
    console.log(boardSolution) //debugging
  }

  return (
    <>
      <div className='board'>
        <h1>Sudoku Solver</h1>
        {
          board.map((row, index) => {
            return(
              <Row position={index} key={`${idTest}--${index}`}/>
            )
          })
        }
      </div>
      <div>
        <button className='check-button' onClick={getSolution}>Check Solution</button>
      </div>
    </>
  )
}
