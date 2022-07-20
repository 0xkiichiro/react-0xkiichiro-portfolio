import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [navArr, setNavArr] = useState([]);

  const handleMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  const handleLinkClick = (e) => {
    navArr.includes(e.target.id) || setNavArr([e.target.id, ...navArr]);
  };

  return (
    <Context.Provider
      value={{
        isMinimized,
        setIsMinimized,
        handleMinimized,
        navArr,
        setNavArr,
        handleLinkClick,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
