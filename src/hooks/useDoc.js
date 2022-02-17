import React, { useEffect, useRef, useState } from "react";
import { projectTicketTracker } from "../firebase/Config";

export const useDoc = (collection,docId,userid) => {
  const [doc, setDoc] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    let ref = projectTicketTracker.collection(collection).doc(docId);
  

    const unsubscribe = ref.onSnapshot((snapshot) => {
        if(snapshot.data() && snapshot.data().assignedUsersID.includes(userid)) {
          setDoc({...snapshot.data(), id: snapshot.id});
          setError(null);
        } else {
          setDoc(null);
          setError("No such document exists")
        }
      },
      (err) => {
        console.log(err);
        setError("Could not fetch the data");
      }
    );

    //unsubscribe on mount
    return () => unsubscribe();
  }, [collection,docId,userid]);

  return { doc, error };
};
