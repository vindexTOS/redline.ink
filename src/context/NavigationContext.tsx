import { createContext, useContext, useReducer, useRef } from "react";

type Cell = {
    mainRef: any 
    serviceRef: any 
};

const NavigationContext = createContext<Cell | null>(null);

export const NavigationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const mainRef = useRef(null);
  const serviceRef = useRef(null);

  return (
    <NavigationContext.Provider value={{  mainRef, serviceRef} }>
      {children}
    </NavigationContext.Provider>
  );
};

export const UseNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("Context Not Wrapped Reload Page");
  }

  return context;
};
