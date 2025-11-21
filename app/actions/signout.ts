"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/utils/auth";

export async function signOutUser() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/signin");
}
