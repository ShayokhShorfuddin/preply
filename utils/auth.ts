import { betterAuth } from "better-auth";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://sage-io.vercel.app",
  trustedOrigins: ["http://localhost:3000", "https://sage-io.vercel.app"],
});
