import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/utils/auth";
import Profile from "./_components/Profile";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="h-svh py-2 pr-2">
      <div className="h-full border border-neutral-200 rounded-xl">
        <Profile />
      </div>
    </div>
  );
}
