import React, { createContext, useContext } from "react";
import { Store } from "../store/Store";

//using class as a type
type RootStateContextValue = {
  notesStore: Store;
};

//default value as empty object as
const RootStateContext = createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

const notesStore = new Store();
// define the funtion then pass in props with children
//now react knows that children are react.react node type
export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children
}) => {
  return (
    <RootStateContext.Provider value={{ notesStore }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootStore = () => useContext(RootStateContext);
