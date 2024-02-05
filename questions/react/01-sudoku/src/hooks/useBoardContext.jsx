import { useContext } from "react"
import { BoardContext } from "../context/boardContext"

export function useBoardContext(){
    const { board, setBoard, error, setError } = useContext(BoardContext)

    return { board, setBoard, error, setError }
}