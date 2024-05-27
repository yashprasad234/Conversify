import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../lib/firebase";

// useUserStore state shared across the app, state management using ZUSTAND
export const useUserStore = create((set) => ({
  currentUser: null, // currentUser that is logged in
  isLoading: true, // tells if currentUser's details are being fetched
  fetchUserInfo: async (uid) => {
    // fetches the details of currentUser from the database
    if (!uid) return set({ currentUser: null, isLoading: false });

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      console.log(err);
      return set({ currentUser: null, isLoading: false });
    }
  },
}));
