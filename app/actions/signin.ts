"use server";

import { headers } from "next/headers";
import { auth } from "@/utils/auth";

export async function signInUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const data = await auth.api.signInEmail({
    body: {
      email: email,
      password: password,
    },

    headers: await headers(),
  });

  console.log("Sign in response:", data);
}
