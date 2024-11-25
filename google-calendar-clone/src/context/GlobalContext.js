import { createContext } from "react";

const GlobalContext = createContext({
  showEventModal: false,
  setShowEventModal: () => {},
});

export default GlobalContext;
