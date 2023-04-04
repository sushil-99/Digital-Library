import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config/firebaseConfig";
import { getBookSuccess } from "./bookSlice";

export const getBooksAction = () => async (dispatch) => {
  try {
    const q = query(collection(db, "books"));

    const querySnapshot = await getDocs(q);
    let books = [];

    querySnapshot.forEach((doc) => {
      const { id } = doc;

      const data = { ...doc.data(), id };
      books.push(data);
    });

    dispatch(getBookSuccess(books));
  } catch (error) {
    toast.error(error.message);
  }
};

export const addBookAction = (formData) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "books"), formData);

    if (docRef?.id) {
      toast.success("New Book has been added in the database.");
      dispatch(getBooksAction());
      return;
    }
    toast.error("unable to add the book, try again later.");
  } catch (error) {
    toast.error(error.message);
  }
};
