export async function obtainSolution(newBoard){
    const data = {
      sudoku: [newBoard]
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    try {
      const response = await fetch('/api', options);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      return responseData.data[0]
  
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }