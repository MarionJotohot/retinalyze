import { create } from "zustand";
import { supabase } from "../api/supabaseClient";

// Doctor store using Zustand
export const useDoctorStore = create((set) => ({
  doctor: null, // doctor object
  isLoading: false, // Loading state
  error: null, // Error state

  // Function to fetch a doctor from Supabase
  fetchDoctor: async (userId) => {
    set({ isLoading: true, error: null }); // Reset error before fetching
    try {
      // Fetch doctors from the "doctors" table
      const { data, error } = await supabase
        .from("doctors")
        .select("*")
        .eq("user_id", userId)
        .single();

      // Handle any errors from Supabase
      if (error) throw error;

      // Update the store with fetched doctors
      set({ doctor: data, isLoading: false });
      console.log("Fetched doctors:", data);
    } catch (error) {
      // Handle errors appropriately
      console.error("Fetch doctors error:", error);
      set({ error: error.message, isLoading: false });
    }
  },
}));
