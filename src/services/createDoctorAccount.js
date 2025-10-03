import { supabase } from "../api/SupabaseClient";

// Create a new doctor account
export const createDoctorAccount = async (email, password, doctorData) => {
  // Create user in Supabase Auth
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) throw error;

  // Insert into profiles and doctors tables
  await supabase.from("profiles").insert({
    user_id: data.user.id,
    role: "doctor",
    full_name: doctorData.full_name,
    // ... other fields
  });

  // Insert into doctors table
  await supabase.from("doctors").insert({
    user_id: data.user.id,
    specialization: doctorData.specialization,
    // ... other fields
  });

  return data;
};
