import { supabase } from "../api/supabaseClient";

// Function to create a new doctor account via Supabase Edge Function
export const createDoctorAccount = async (email, password, doctorData) => {
  const { data, error } = await supabase.functions.invoke("addDoctorAccount", {
    body: JSON.stringify({
      email,
      password,
      doctorData,
    }),
  });

  if (error) {
    console.error("Error details:", error);
    throw error;
  }

  return data;
};
