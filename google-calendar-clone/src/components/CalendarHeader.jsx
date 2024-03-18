import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
import ChevronBtns from "./ChevronBtns";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  console.log(monthIndex);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <span className="mr-10 text-xl font-normal">Calendar</span>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>

      <ChevronBtns onBigPrev={handlePrevMonth} onBigNext={handleNextMonth} />

      <h2 className="ml-4 text-xl font-normal">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
