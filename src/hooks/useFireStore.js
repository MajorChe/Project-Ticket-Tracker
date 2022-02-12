import { projectTicketTracker, timestamp } from "../firebase/Config";
import { useState, useEffect, useReducer } from "react";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const fireStoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { document: null, isPending: true, error: null, success: null };
    case "ADDED_DOCUMENT":
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case "DELETED_DOCUMENT":
      return {
        document: null,
        isPending: false,
        error: null,
        success: true,
      };
    case "ERROR":
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export const useFireStore = (collection) => {
  const [response, dispatch] = useReducer(fireStoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  //collection reference

  const ref = projectTicketTracker.collection(collection);

  // only dispatch not cancelled

  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  //add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt });
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  //delete a document
  const deleteDocument = async(id) => {
    dispatch({ type: "IS_PENDING" });
    try {
      await ref.doc(id).delete();
      dispatchIfNotCancelled({
        type: "DELETED_DOCUMENT",
      });
    } catch (err) {
      console.log(err.message);
      dispatchIfNotCancelled({ type: "ERROR", payload: "Could not delete" });
    }
  };

  //cleanup
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { response, addDocument, deleteDocument };
};
