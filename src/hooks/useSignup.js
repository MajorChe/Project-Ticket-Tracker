import React, { useEffect, useState } from "react";
import {
  projectTicketTrackerAuth,
  projectTicketTrackerStorage,
} from "../firebase/Config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();
  const signup = async (name, email, password, avatar) => {
    setError(null);
    setIsPending(true);

    try {
      const response =
        await projectTicketTrackerAuth.createUserWithEmailAndPassword(
          email,
          password
        );

      if (!response) {
        throw new Error("Could not sign up!!");
      }

      // upload user image
      const uploadPath = `thumbnails/${response.user.uid}/${avatar.name}`
      const img = await projectTicketTrackerStorage.ref(uploadPath).put(avatar)
      const imgUrl = await img.ref.getDownloadURL()

      await response.user.updateProfile({
        displayName: name,
        photoURL: imgUrl,
      });

      // dispatch login action type
      dispatch({ type: "LOGIN", payload: response.user });

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
  //used as a clean up function to avoid side effects for state unmounting
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { signup, error, isPending };
};
