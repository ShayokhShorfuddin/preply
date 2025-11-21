"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/utils/auth";

export async function signInUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const data = await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      },

      headers: await headers(),
    });
  } catch (error) {
    console.error("Error signing in:", error);
  }

  // TODO: It probably shouldnt be here
  redirect("/home");
}
