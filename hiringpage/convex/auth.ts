import { v } from "convex/values";

// Simplified auth module for deployment
export const auth = {
  query: {
    // Define public query to check authentication status
    authorized: (ctx: any) => ({
      isAuthenticated: false,
      userId: null
    })
  }
};

// Define placeholders for auth functions
export const signIn = () => {};
export const signOut = () => {};
export const store = {
  getUser: () => null
};
export const isAuthenticated = () => false;
