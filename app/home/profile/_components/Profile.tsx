"use client";

import { authClient } from "@/utils/auth-client";

export default function Profile() {
  // Get user session and first name
  const { data: session, isPending } = authClient.useSession();
  const userName = session?.user.name || "Guest";
  const firstName = userName.split(" ")[0];

  return (
    <div>
      <p>Profile</p>

      <p>Hello {isPending ? "Guest" : firstName}</p>
    </div>
  );
}

// TODO: We need Tanstack Query to get MongoDB data and use that cache that across the whole platform
