import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
export const Authcontext = createContext();

const Authprovider = ({ children }) => {
  const allConetext = useFirebase();
  return (
    <Authcontext.Provider value={allConetext}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
