import React, { useContext, useEffect, useState } from "react";
import getMonth from "../data/dateArr";
import GlobalContext from "../context/GlobalContext";
import ChevronBtns from "./ChevronBtns";
import dayjs from "dayjs";

export default function MiniCalendar() {
  const { monthIndex, setMonthIndex, daySelected, setDaySelected } =
    useContext(GlobalContext);

  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [monthArray, setMonthArray] = useState(getMonth());
  const [currDay, setCurrDay] = useState();

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  const handlePrevMonth = () => {
    setCurrentMonthIdx((prevMonthIdx) => {
      const newMonthIdx = prevMonthIdx - 1;
      setMonthArray(getMonth(newMonthIdx));
      return newMonthIdx;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonthIdx((prevMonthIdx) => {
      const newMonthIdx = prevMonthIdx + 1;
      setMonthArray(getMonth(newMonthIdx));
      return newMonthIdx;
    });
  };

  const getDayClass = (day) => {
    const format = "DD-MM-YY";
    setCurrDay(day.format(format));
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
                className={`py-1 w-full ${
                  day.format("YY-MM-DD") === dayjs().format("YY-MM-DD") &&
                  "bg-blue-500 rounded-full text-white"
                } ${
                  day.format("DD-MM-YY") === daySelected &&
                  "bg-blue-100 rounded-full text-blue-600 font-normal"
                }`}
                onClick={() => {
                  handleMiniButton();
                  setDaySelected(day);
                  getDayClass(day);
                }}
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
