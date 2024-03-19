import { useState } from "react";
import GlobalContext from "./GlobalContext.js";
import dayjs from "dayjs";

export default function ContextWrapper({ children }) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());

  return (
    <GlobalContext.Provider
      value={{ monthIndex, setMonthIndex, daySelected, setDaySelected }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
