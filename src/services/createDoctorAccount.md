import { supabase } from "../api/supabaseClient";

export const createDoctorAccount = async (email, password, doctorData) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    throw new Error("You must be logged in to create a doctor account");
  } else {
    console.log("Authenticated user:", session.user);
  }

  const accessToken = session.access_token;

  const { data, error } = await supabase.functions.invoke("addDoctorAccount", {
    body: {
      email,
      password,
      doctorData,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (error) {
    throw new Error(error.message || "Failed to create doctor account");
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  return data;
};
