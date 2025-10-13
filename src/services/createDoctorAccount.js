import { supabase } from "../api/supabaseClient";

// Handles creation of a doctor + linked profile records
export const createDoctorAccount = async (email, password, doctorData) => {
  // Create user in Supabase Auth
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) throw error;

  // Insert into profiles tables
  const { error: profileError } = await supabase.from("profiles").insert({
    user_id: data.user.id,
    role: "doctor",
    full_name: doctorData.full_name,
    address: doctorData.address,
    phone_number: doctorData.phone_number,
  });

  if (profileError) throw profileError;

  // Insert into doctors table
  const { error: doctorError } = await supabase.from("doctors").insert({
    user_id: data.user.id,
    specialization: doctorData.specialization,
    license_number: doctorData.license_number,
    clinic_name: doctorData.clinic_name,
    professional_title: doctorData.professional_title,
    years_experience: doctorData.years_experience,
  });

  if (doctorError) throw doctorError;

  return data;
};
