import React, { useEffect, useRef, useState } from "react";
import { projectTicketTracker } from "../firebase/Config";

export const useDoc = (collection,docId) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    let ref = projectTicketTracker.collection(collection).doc(docId);
  

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        setDocument(snapshot.data());
        setError(null);
      },
      (err) => {
        console.log(err);
        setError("Could not fetch the data");
      }
    );

    //unsubscribe on mount
    return () => unsubscribe();
  }, [collection]);

  return { document, error };
};
