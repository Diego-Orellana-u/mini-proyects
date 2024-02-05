import { LittleSquare } from "./LittleSquare";
import './BigSquare.css'
import { useId } from "react";
import { useBoardContext } from "../hooks/useBoardContext";

export function Row({ position }){
    const { board } = useBoardContext()

    const rowId = useId()

    return(
        <div className="row">
            {
                board.map((square,index) => {
                    return(
                        <LittleSquare position={position} key={`${rowId}--${index}`} positionLit={index}/>
                    )
                })
            }
        </div>
    )
}
