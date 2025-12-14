import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isCheckingAuth: true,
    isSigningUp: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isUpdatingProfile: false,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check")
            set({ authUser: res.data})
        } catch (error) {
            console.log("Error in checkAuth", error);
            set({ authUser: null})
        } finally {
            set({ isCheckingAuth: false})
        }
    },

    signup: async (data) =>  {
        set({ isSigningUp: true})
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data})

            toast.success("Account created successfully!")
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isSigningUp: false})
        }
    },

    login: async (data) => {
        if (get().isLoggingIn) return;
        set({ isLoggingIn: true})
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authUser: res.data})

            toast.success("Logged in successfully!", { id: "login-success" })
        } catch (error) {
            toast.error(error.response.data.message, { id: "login-error" })
        } finally {
            set({ isLoggingIn: false})
        }
    },

    logout: async () => {
        set({ isLoggingOut: true})
        try {
            const res = await axiosInstance.post("/auth/logout");
            set({ authUser: null})

            toast.success("Logged out successfully!")
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isLoggingOut: false})
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true});
        try {
            const res = await axiosInstance.put("/auth/update-profile", data);
            set({ authUser: res.data});
            toast.success("Profile updated successfully!");
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "Failed to update profile";
            toast.error(errorMessage);
        }
        finally {
            set({ isUpdatingProfile: false});
        }
    }

    

}));