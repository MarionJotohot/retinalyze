import { supabase } from "../api/supabaseClient";

// Creates a doctor account by calling the Supabase Edge Function
export const createDoctorAccount = async (email, password, doctorData) => {
  // Get the current session to send the auth token
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Ensure the user is authenticated
  if (!session) {
    throw new Error("You must be logged in to create a doctor account");
  } else {
    console.log("Authenticated user:", session.user);
  }

  // Get the access token from the session
  const accessToken = session.access_token;

  // Call the Edge Function
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

  // Handle any errors from the function call
  if (error) {
    throw new Error(error.message || "Failed to create doctor account");
  }

  // Handle any errors returned in the data
  if (data?.error) {
    throw new Error(data.error);
  }

  // Return the created doctor's data
  return data;
};
