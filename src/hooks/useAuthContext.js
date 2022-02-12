import { useContext } from "react";
import { AccountContext } from "../context/AccountContext";

export const useAuthContext = () => {
  const context = useContext(AccountContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }
  
  return context;
};
