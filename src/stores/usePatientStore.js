import { create } from "zustand";
import { supabase } from "../api/supabaseClient";

// Doctor store using Zustand
export const usePatientStore = create((set, get) => ({
  patients: [], // List of patients
  isLoading: false, // Loading state
  error: null, // Error state
  hasMore: true, // new: track if more data exists
  page: 0, // current page index
  pageSize: 10, // how many rows per fetch

  // Fetch doctors from Supabase
  fetchPatients: async (isNextPage = false) => {
    const { page, pageSize, patients } = get();
    const nextPage = isNextPage ? page + 1 : 0;
    const from = nextPage * pageSize;
    const to = from + pageSize - 1;

    // Reset error before fetching
    set({ isLoading: true, error: null });

    try {
      // Fetch doctors from the "doctors" table
      const { data } = await supabase
        .from("patients")
        .select("*", { count: "exact" })
        .range(from, to);

      // Merge old + new if it's next page
      const newPatients = isNextPage ? [...patients, ...data] : data;

      // Update the store with fetched doctors
      set({
        patients: newPatients,
        isLoading: false,
        hasMore: data.length === pageSize, // no more pages if data < pageSize
        page: nextPage,
      });
      console.log("Fetched patients:", data);
    } catch (error) {
      // Handle errors appropriately
      console.error("Fetch patients error:", error);
      set({ error: error.message, isLoading: false });
    }
  },
}));
