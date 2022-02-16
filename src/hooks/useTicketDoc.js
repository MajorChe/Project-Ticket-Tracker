import React, { useEffect, useRef, useState } from "react";
import { projectTicketTracker } from "../firebase/Config";

export const useTicketDoc = (collection,docId) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    let ref = projectTicketTracker.collection(collection).doc(docId);
  

    const unsubscribe = ref.onSnapshot((snapshot) => {
        if(snapshot.data()) {
          setDocument({...snapshot.data(), id: snapshot.id});
          setError(null);
        } else {
          setDocument(null);
          setError("No such ticket exists")
        }
      },
      (err) => {
        console.log(err);
        setError("Could not fetch the data");
      }
    );

    //unsubscribe on mount
    return () => unsubscribe();
  }, [collection,docId]);

  return { document, error };
};
