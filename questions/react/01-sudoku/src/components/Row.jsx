import { LittleSquare } from "./LittleSquare";
import './BigSquare.css'

export function Row({ position, setBoard, board,error}){

    return(
        <div className="row">
            <LittleSquare position={position} setBoard={setBoard} board={board} positionLit={0} error={error} />
            <LittleSquare position={position} setBoard={setBoard} board={board} positionLit={1} error={error} />
            <LittleSquare position={position} setBoard={setBoard} board={board} positionLit={2} error={error} />
            <LittleSquare position={position} setBoard={setBoard} board={board} positionLit={3} error={error} />
            <LittleSquare position={position} setBoard={setBoard} board={board} positionLit={4} error={error} />
            <LittleSquare position={position} setBoard={setBoard} board={board} positionLit={5} error={error} />
            <LittleSquare position={position} setBoard={setBoard} board={board} positionLit={6} error={error} />
            <LittleSquare position={position} setBoard={setBoard} board={board} positionLit={7} error={error} />
            <LittleSquare position={position} setBoard={setBoard} board={board} positionLit={8} error={error} />
        </div>
    )
}
