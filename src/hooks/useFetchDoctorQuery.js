import { useQuery } from "@tanstack/react-query";
import { supabase } from "../api/supabaseClient";

// Function to fetch doctor data by userId
async function fetchDoctorData(userId) {
  if (!userId) return null;

  // Fetch doctor with related profile
  const { data, error } = await supabase
    .from("doctors")
    .select("*, profiles!inner(*)")
    .eq("profiles.user_id", userId)
    .maybeSingle();

  if (error) throw error;

  return data;
}

// Hook to fetch doctor data
export function useFetchDoctor(userId) {
  return useQuery({
    queryKey: ["doctor", userId],
    queryFn: () => fetchDoctorData(userId),
    enabled: !!userId,
    // you can add more options:
    // staleTime: 5 * 60 * 1000,
    // cacheTime: 15 * 60 * 1000,
    // onError: (err) => console.error('Error fetching doctor:', err),
  });
}
