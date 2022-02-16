import React, { useEffect, useRef, useState } from "react";
import { projectTicketTracker } from "../firebase/Config";
import { useAuthContext } from "./useAuthContext";

export const useProjectDocs = (collection, userid, _query, _orderBy) => {
  const { user } = useAuthContext();
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  //if we don't use a ref: infinite loop in useEffect happens
  // _query is an array and it is different on every call.
  // This happens for non primitive data types such as arrays, objects,function

  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = projectTicketTracker.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          if(doc.data().assignedUsersID.includes(userid)) {
            results.push({ ...doc.data(), id: doc.id });
          }
        });

        setDocuments(results);
        setError(null);
      },
      (err) => {
        console.log(err);
        setError("Could not fetch the data");
      }
    );

    //unsubscribe on mount
    return () => unsubscribe();
  }, [collection, query, orderBy]);

  return { documents, error };
};
