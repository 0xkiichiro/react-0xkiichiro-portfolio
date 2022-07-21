import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [navArr, setNavArr] = useState([]);
  const [isActive, setIsActive] = useState();

  const handleMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  const handleLinkClick = (e) => {
    navArr.includes(e.target.id) || setNavArr([e.target.id, ...navArr]);
    setIsActive(e.target.id);
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
        isActive,
        setIsActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
