
export function createBoardSolution(board, solutionData){
    const boardSolution = structuredClone(board)
    let k = 0
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        boardSolution[i][j] = solutionData.solution[k]
        k++
      }
    }
    return boardSolution
}