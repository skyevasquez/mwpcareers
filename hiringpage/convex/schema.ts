import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
// The schema provides more precise TypeScript types.
export default defineSchema({
  ...authTables,
  jobApplications: defineTable({
    position: v.string(),
    location: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    additionalDetails: v.optional(v.string()),
    resumeStorageId: v.optional(v.string()),
    resumeFileName: v.optional(v.string()),
    status: v.optional(v.string()),
    submittedAt: v.number(),
  }).index("by_status", ["status"]),
});
