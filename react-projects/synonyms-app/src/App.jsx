import { useSyno } from './hooks/useSyno'
import './App.css'
import { FormAndInput } from './components/FormAndInput'
import { SynonymsList } from './components/SynonymsList'

export default function App() {

  const { handleSubmit, synonysms, word } = useSyno()

  return (
    <>
      <h1>Please Write A Word</h1> 
      <FormAndInput handleSubmit={handleSubmit} />
      <SynonymsList synonysms={synonysms} word={word} />
    </>
  )
}

