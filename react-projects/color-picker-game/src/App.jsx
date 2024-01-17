import { useEffect, useState } from 'react'
import { ColorRectangle } from './components/ColorRectangle'
import { HexButton } from './components/HexButton'
import './App.css'

function createRandomColors () {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a','b','c','d','e','f']
  let hexcode ='#'
  for(let i = 0; i < 6; i++){
    let randomHexCharacter = Math.floor(Math.random() * 16)
    hexcode += numbers[randomHexCharacter]
  }
  return hexcode
}

export default function App() {
  const [ colors, setColors ] = useState([])
  const [ answer, setAnswer ] = useState(null)  

  function loadRandomColors () {
    let color1 = createRandomColors()
    let color2 = createRandomColors()
    let color3 = createRandomColors()
    let finalColors = [
      {
        hex: color1,
        id: 0
      },
      {
        hex: color2,
        id: 1
      },
      {
        hex: color3,
        id: 2
      }
    ]

    const randomTrue = Math.floor(Math.random() * 3)

    finalColors[randomTrue].isReal = true
    setColors(finalColors)
  }

  useEffect(() => {
    loadRandomColors()
  },[])

  const realColor = colors.filter(color => color.isReal)
  
  return (
    <>
      <h1>Pick The Correct Hex Code!</h1>
      {
        realColor.map(color =>
            <ColorRectangle realSquareColor={color.hex} key={color.id}/>
        )
      }
      <div className='buttons__container'>
        {
          colors.map(color => 
              <HexButton isReal={color.isReal} randomColor={color.hex} key={color.id} setAnswer={setAnswer} handleAnswer={loadRandomColors}/>
          )
        }
      </div>

      <div>
        <p className='answer'>{answer}</p>
      </div>
    </>  
  )
}
