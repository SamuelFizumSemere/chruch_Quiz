import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const getQuestions = async () => {
  const querySnapshot = await getDocs(collection(db, "questions"));

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};