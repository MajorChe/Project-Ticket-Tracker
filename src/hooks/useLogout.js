import { useEffect, useState } from "react";
import { projectTicketTracker, projectTicketTrackerAuth } from "../firebase/Config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { user } = useAuthContext();

  const { dispatch } = useAuthContext();
  const logout = async () => {
    setError(null);
    setIsPending(true);
    //logout user
    try {
      //update online status to false when user is logging out
      const { uid } = user;
      await projectTicketTracker.collection("users").doc(uid).update({ online:false });
      
      //sign out the user
      await projectTicketTrackerAuth.signOut();
      dispatch({ type: "LOGOUT" });
      //update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  },[]);
  return { logout, error, isPending };
};
