import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/utils/auth";
import { Home } from "./_components/Home";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/signin");
  }

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-svh py-2 pr-2">
        <div className="h-full border border-neutral-200 rounded-xl">
          <Home />
        </div>
      </div>
    </QueryClientProvider>
  );
}
