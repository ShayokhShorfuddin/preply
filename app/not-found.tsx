"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main>
      <section className="flex justify-center items-center min-h-svh">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl">404</h1>
          <p className="text-sm mt-2 text-center">
            Hmm.. couldn't find this page
          </p>
          <button
            type="button"
            onClick={() => router.back()}
            className="mt-4 text-sm underline focus:outline-none focus:ring-1 rounded-md px-1 hover:cursor-pointer"
          >
            Go back
          </button>
        </div>
      </section>
    </main>
  );
}
