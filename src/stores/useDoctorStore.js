import { create } from "zustand";
import { supabase } from "../api/supabaseClient";

// Doctor store using Zustand
export const useDoctorStore = create((set) => ({
  doctors: [], // List of doctors
  isLoading: false, // Loading state
  error: null, // Error state

  // Fetch doctors from Supabase
  fetchDoctors: async () => {
    set({ isLoading: true, error: null }); // Reset error before fetching
    try {
      // Fetch doctors from the "doctors" table
      const { data } = await supabase.from("doctors").select("*");
      // Update the store with fetched doctors
      set({ doctors: data, isLoading: false });
      console.log("Fetched doctors:", data);
    } catch (error) {
      // Handle errors appropriately
      console.error("Fetch doctors error:", error);
      set({ error: error.message, isLoading: false });
    }
  },
}));
