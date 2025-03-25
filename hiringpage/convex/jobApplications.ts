import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { ConvexError } from "convex/values";

// Function to submit a job application
export const submitApplication = mutation({
  args: {
    position: v.string(),
    location: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    additionalDetails: v.optional(v.string()),
    resumeFileId: v.optional(v.string()), // Storage ID from generateUploadUrl
    resumeFileName: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Validate required fields
    if (!args.position || !args.location || !args.firstName || 
        !args.lastName || !args.email || !args.phone) {
      throw new ConvexError("Required fields are missing");
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(args.email)) {
      throw new ConvexError("Please enter a valid email address");
    }

    // Insert application into the database
    const applicationId = await ctx.db.insert("jobApplications", {
      position: args.position,
      location: args.location,
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      phone: args.phone,
      additionalDetails: args.additionalDetails || "",
      resumeStorageId: args.resumeFileId,
      resumeFileName: args.resumeFileName,
      status: "pending",
      submittedAt: Date.now(),
    });

    return applicationId;
  },
});

// Generate a URL for file upload
export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

// Function to list all applications
export const listApplications = query({
  handler: async (ctx) => {
    // This would typically have auth checks
    return await ctx.db.query("jobApplications")
      .order("desc")
      .collect();
  },
});

// Function to get a specific application
export const getApplication = query({
  args: { id: v.id("jobApplications") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Function to update application status
export const updateApplicationStatus = mutation({
  args: { 
    id: v.id("jobApplications"),
    status: v.string()
  },
  handler: async (ctx, args) => {
    // This would typically have auth checks
    await ctx.db.patch(args.id, { status: args.status });
    return args.id;
  },
});

// Function to get the resume file
export const getResumeUrl = query({
  args: { storageId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
}); 