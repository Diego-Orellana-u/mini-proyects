
export function FormAndInput({handleSubmit}) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input name='query' />
          <button style={{backgroundColor: 'white', color: 'black'}}>Search Synonyms</button>
        </form>
      </div>
    )
  }