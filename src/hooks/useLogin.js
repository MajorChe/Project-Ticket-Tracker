import { useEffect, useState } from "react";
import { projectTicketTrackerAuth } from "../firebase/Config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const { dispatch } = useAuthContext();
  const login = async (email,password) => {
    setError(null);
    setIsPending(true);
    try {
      const response = await projectTicketTrackerAuth.signInWithEmailAndPassword(email,password);
      dispatch({ type: "LOGIN", payload: response.user });
      //update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err)
        //different error messages are stored in both err.code and err.message
        setError("Please check your credentials");
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  },[]);
  return { login, error, isPending };
};
