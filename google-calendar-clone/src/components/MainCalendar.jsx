import React from "react";
import DaySquare from "./DaySquare";

export default function MainCalendar({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((weekRow, index) => (
        <React.Fragment key={index}>
          {weekRow.map((dayObj, idx) => {
            return <DaySquare key={idx} rowIndex={index} day={dayObj} />;
          })}
        </React.Fragment>
      ))}
    </div>
  );
}
