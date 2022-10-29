import { createContext, useContext, useState, useEffect, useRef } from 'react';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDestinationIndex, setActiveDestinationIndex] = useState(0);
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleActiveIndex = index => setActiveIndex(index);
  const handleActiveDestinationIndex = index =>
    setActiveDestinationIndex(index);
  const handleActiveTechIndex = index => setActiveTechIndex(index);
  const toggleMenu = () => setIsOpen(!isOpen);

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  };

  return (
    <stateContext.Provider
      value={{
        activeIndex,
        handleActiveIndex,
        activeDestinationIndex,
        handleActiveDestinationIndex,
        activeTechIndex,
        handleActiveTechIndex,
        useWindowSize,
        isOpen,
        toggleMenu,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
