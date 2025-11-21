import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import client from "./db";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  plugins: [nextCookies()],
  database: mongodbAdapter(client.db()),

  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://preply.vercel.app",
  // TODO: ⚠️⚠️⚠️⚠️ Make sure these URLs are correct when deploying to vercel
  trustedOrigins: ["http://localhost:3000", "https://preply.vercel.app"],
});
