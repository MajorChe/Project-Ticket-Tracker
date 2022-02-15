import { useEffect, useState } from "react";
import { projectTicketTracker, projectTicketTrackerAuth } from "../firebase/Config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (email,password) => {
    setError(null);
    setIsPending(true);
    //logging in user
    try {

      //checking the credentials
      const response = await projectTicketTrackerAuth.signInWithEmailAndPassword(email,password);

      //settinge the status to true
      await projectTicketTracker.collection("users").doc(response.user.uid).update({ online:true });

      //setting the state using by sending response.user obj through dispatch
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
