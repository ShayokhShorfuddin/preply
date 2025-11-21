"use server";

import { auth } from "@/utils/auth";

export async function signUpUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const data = await auth.api.signUpEmail({
      body: {
        name: name,
        email: email,
        password: password,
      },
    });

    console.log("Sign up response:", data);
  } catch (error) {
    // TODO:
  }
}
