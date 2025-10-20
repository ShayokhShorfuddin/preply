import { Lexend_Deca } from "next/font/google";
import Image from "next/image";
import Envelop from "@/public/envelope.svg";
import Pointer from "@/public/pointer.svg";

const lexend = Lexend_Deca({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center mt-[2.5rem] md:mt-[4.5rem] font-sans px-[2rem]">
        <div className="relative">
          <h1
            className={`${lexend.className} text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight`}
          >
            We <span className="round_marking">turn</span> “We'll be in touch”{" "}
            <br className="hidden xs:block" />
            into “You're <span className="green_underlined">hired!</span>”
          </h1>

          {/* Envelop and Cursor */}
          <Image
            priority
            src={Envelop}
            alt="Envelope"
            className="hidden lg:block absolute -bottom-1 -left-20 -rotate-12 size-11"
          />
          <Image
            priority
            src={Pointer}
            alt="Pointer"
            className="hidden lg:block absolute -bottom-1 -right-20 -rotate-2 size-11"
          />
        </div>

        <p className="mt-[1.6rem] md:mt-[1.8rem] lg:mt-[2rem] text-neutral-700 max-w-2xl text-center text-sm sm:text-base">
          A complete job-prep platform that lets you practice interviews, refine
          your résumé, and build steady confidence until the offer arrives. Map
          your skills to any role, rehearse with tailored questions, and track
          progress in one calm, uncluttered space.
        </p>

        <button
          type="button"
          className="py-1.5 sm:py-2 px-4 sm:px-5 bg-preply-green hover:cursor-pointer font-medium rounded-full transform transition active:scale-98 mt-[2rem] select-none text-sm sm:text-base"
        >
          Start Preparing From Today
        </button>
      </div>
    </section>
  );
}
