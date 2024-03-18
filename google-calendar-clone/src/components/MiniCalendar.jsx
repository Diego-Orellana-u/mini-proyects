import React, { useContext, useEffect, useState } from "react";
import getMonth from "../data/dateArr";
import GlobalContext from "../context/GlobalContext";
import ChevronBtns from "./ChevronBtns";
import dayjs from "dayjs";

export default function MiniCalendar() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [monthArray, setMonthArray] = useState(getMonth());

  useEffect(() => {
    setMonthArray(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  const handlePrevMonth = () => {
    setCurrentMonthIdx(currentMonthIdx - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  };

  const handleMiniButton = () => {
    if (currentMonthIdx !== monthIndex) {
      setMonthIndex(currentMonthIdx);
    }
  };

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="font-normal">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <ChevronBtns
          onSmallPrev={handlePrevMonth}
          onSmallNext={handleNextMonth}
        />
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {monthArray[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {monthArray.map((weekRow, idx) => (
          <React.Fragment key={idx}>
            {weekRow.map((day, i) => (
              <button
                key={i}
                className={`py-1 w-full`}
                onClick={handleMiniButton}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
