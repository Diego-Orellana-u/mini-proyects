export function SynonymsList({ synonysms, word }) {
    return (
      <div>
        {word && <span className='info'>Your word is: {word}</span>}
        {word && <p className='info'>Here Are Some Synonysms:</p>}
        <ul style={{textAlign: 'left'}}>
          { synonysms &&
            synonysms.map(word => 
              <li key={word.word}>{word.word}</li>
            )
          }
        </ul>
      </div>
    )
  }