import { useContext, useEffect, useState } from "react";
import getMonth from "./data/dateArr";
import MainCalendar from "./components/MainCalendar";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";

export default function App() {
  const { monthIndex } = useContext(GlobalContext);
  const [month, setMonth] = useState(getMonth(monthIndex));

  useEffect(() => {
    setMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      <EventModal />
      <div className="h-screen flex flex-col flex-1">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <MainCalendar month={month} />;
        </div>
      </div>
    </>
  );
}
