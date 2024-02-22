import { useId, useState } from 'react'
import './App.css'

let states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

export default function App(){
  const [ dropdown, setDropdown ] = useState(false)

  const optionId = useId()

  return(
    <>
      <div className='container'>
        <button className='dropdown__btn' onClick={() => setDropdown(prevState => !prevState)}>
          {states.length} disponible values
        </button>
        {
          dropdown &&
          <div className='dropdown'>
            {
              states.map((state, index) => (
                <div key={`${optionId} - ${index}`}>
                  <label htmlFor={`${index}`}>{state}</label>
                  <input className='dropdown__checkbox' type='checkbox' id={`${index}`}  value={state} />
                </div>
              ))
            } 
          </div>
        }
      </div>
    </>
  )
}