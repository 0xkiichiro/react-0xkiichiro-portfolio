import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Context.Provider value={{ isMinimized, setIsMinimized, handleMinimized }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
