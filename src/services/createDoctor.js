import { supabase } from "../api/supabaseClient";

// Handles creation of a doctor + linked profile records using Edge Function
export const createDoctorAccount = async (email, password, doctorData) => {
  const { data, error } = await supabase.functions.invoke('addDoctorTrial', {
    body: {
      email,
      password,
      doctorData
    }
  });

  if (error) throw error;

  return data;
};