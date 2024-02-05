import { useId } from 'react'
import './App.css'
import { Row } from './components/Row'
import { obtainSolution } from './js/obtainSolution'
import { createBoardSolution } from './js/createBoardSoluton'
import { useBoardContext } from './hooks/useBoardContext'


export default function App() {

  const { board, setBoard, error, setError } = useBoardContext()

  const idTest = useId()
  
  async function getSolution(){
    const userInputs = board.map(arr => arr.join('')).join('')

    const solutionData = await obtainSolution(userInputs)
    const boardSolution = createBoardSolution(board, solutionData)
    setBoard(boardSolution)

    if(solutionData.status === 'error'){
      setError(false)
    }else if(solutionData.status === 'OK'){
      setError(true)
    }
    
    console.log(boardSolution) //debugging
  }

  return (
    <>
      <div className='board'>
        {
          board.map((row, index) => {
            return(
              <Row position={index} key={`${idTest}--${index}`} setBoard={setBoard} board={board} error={error}/>
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
