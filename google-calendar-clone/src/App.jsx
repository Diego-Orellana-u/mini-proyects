import { useState } from "react";
import getMonth from "./data/dateArr";
import MainCalendar from "./components/MainCalendar";
import CalendarHeader from "./components/CalendarHeader";

export default function App() {
  const [month, setMonth] = useState(getMonth());

  return (
    <div className="h-screen flex flex-col flex-1">
      <CalendarHeader />
      <div className="flex flex-1">
        <MainCalendar month={month} />;
      </div>
    </div>
  );
}
