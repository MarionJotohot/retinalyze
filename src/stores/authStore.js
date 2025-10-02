import { create } from "zustand";
import { supabase } from "../api/SupabaseClient";

export const useAuthStore = create((set) => {
  // --- setup subscription once ---
  supabase.auth.onAuthStateChange((_event, session) => {
    set({ user: session?.user ?? null });
  });

  return {
    user: null,
    setUser: (user) => set({ user }),

    initialize: async () => {
      // Run this on app start to load user from Supabase
      const { data, error } = await supabase.auth.getUser();
      if (!error && data.user) {
        set({ user: data.user });
      }
    },

    login: async (email, password) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      set({ user: data.user });
      return data;
    },

    register: async (email, password) => {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      // If email confirmation required, user might be null
      if (data.user) {
        set({ user: data.user });
      }
      return data;
    },

    logout: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null });
    },
  };
});
