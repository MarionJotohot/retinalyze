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

  // For SuperAdmin: Function to fetch patients + doctor names from Supabase
  fetchAllPatients: async (isNextPage = false) => {
    const { page, pageSize, patients } = get(); // get current state
    const nextPage = isNextPage ? page + 1 : 0; // determine next page index
    const from = nextPage * pageSize; // calculate range start
    const to = from + pageSize - 1; // calculate range end

    // Reset error before fetching
    set({ isLoading: true, error: null });

    try {
      // Fetch doctors from the "doctors" table
      const { data, error } = await supabase
        .from("patients")
        .select(
          `
          *,
          doctor:doctor_id (
            id,
            profile:profiles (
              full_name
            )
          ),
          profile:profiles (
            full_name,
            avatar_url
          )
        `,
          { count: "exact" }
        )
        .range(from, to);

      // Handle any errors from Supabase
      if (error) throw error;
      // Merge old + new if it's next page
      const newPatients = isNextPage ? [...patients, ...data] : data;
      // Update the store with fetched doctors
      set({
        patients: newPatients,
        isLoading: false,
        hasMore: data.length === pageSize, // no more pages if data < pageSize
        page: nextPage,
      });
      console.log("All Patients with Doctor:", data);
    } catch (error) {
      // Handle errors appropriately
      console.error("Fetch patients error:", error);
      set({ error: error.message, isLoading: false });
    }
  },

  // For Doctors: Fetch only the logged-in doctor’s patients
  fetchAllPatientsByDoctorId: async (doctorId) => {
    set({ isLoading: true, error: null }); // Reset error before fetching
    try {
      // Fetch doctors from the patients table
      const { data, error } = await supabase
        .from("patients")
        .select(
          `
          *,
          profile:profiles (
            full_name,
            avatar_url
          )
        `
        )
        .eq("doctor_id", doctorId);

      // Handle any errors from Supabase
      if (error) throw error;
      // Update the store with fetched doctors
      set({ patients: data, isLoading: false });
    } catch (error) {
      // Handle errors appropriately
      console.error("Fetch doctors patients error:", error);
      set({ error: error.message, isLoading: false });
    }
  },
}));
