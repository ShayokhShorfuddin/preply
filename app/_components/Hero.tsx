import { Lexend_Deca } from "next/font/google";
import Image from "next/image";
import Envelop from "@/public/envelope.svg";
import Pointer from "@/public/pointer.svg";

const lexend = Lexend_Deca({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center mt-17 font-sans">
        <div className="relative">
          <h1
            className={`${lexend.className} text-center text-5xl leading-tight`}
          >
            We <span className="round_marking">turn</span> “We'll be in touch”
            <br />
            into “You're <span className="green_underlined italic">hired!</span>{" "}
            ”
          </h1>

          {/* Envelop and Cursor */}
          <Image
            priority
            src={Envelop}
            alt="Envelope"
            className="absolute -bottom-1 -left-20 -rotate-12 size-11"
          />
          <Image
            priority
            src={Pointer}
            alt="Pointer"
            className="absolute -bottom-1 -right-20 -rotate-2 size-11"
          />
        </div>

        <p className="mt-10 text-neutral-700 max-w-2xl text-center">
          A complete job-prep platform that lets you practice interviews, refine
          your résumé, and build steady confidence until the offer arrives. Map
          your skills to any role, rehearse with tailored questions, and track
          progress in one calm, uncluttered space.
        </p>

        <button
          type="button"
          className="py-2 px-5 bg-preply-green hover:cursor-pointer font-medium rounded-full transform transition active:scale-98 mt-10 select-none"
        >
          Start Preparing From Today
        </button>
      </div>
    </section>
  );
}
