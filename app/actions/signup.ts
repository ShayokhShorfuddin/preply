"use server";

export async function signUpUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  console.log("Signing up user:", { name, email, password });
}
