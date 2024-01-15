export function HexButton ({ randomColor, isReal, setAnswer, handleAnswer }) {
    const pushText = (isReal) => {
      let correct = 'Congratulations!'
      let wrong = 'Wrong Answer :('
      if(isReal){
        setAnswer(correct)
        handleAnswer()
      }else{
        setAnswer(wrong)
      }
    }  
    return (
      <>
        <button onClick={() => pushText(isReal)} className='button'>{randomColor}</button>
      </>
    )
  }