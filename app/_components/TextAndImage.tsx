import Image from "next/image";
import Absorbed from "@/public/illustrations/undraw_absorbed.png";

export default function TextAndImage() {
  return (
    <section>
      {/* TODO: Add more of these components. We might choose a for loop to render multiple components (assuming we have the texts and images ready and the component will stay mostly the same with minimal changes) */}
      <div className="flex justify-center font-sans mt-[6.5rem] md:mt-[7.5rem] px-[2rem]">
        <div className="flex flex-col sm:flex-row items-center gap-x-[2rem] lg:gap-x-[11rem] gap-y-[3rem]">
          <div>
            <p className="font-sans text-[18px] text-neutral-700 leading-tight">
              A modern approach to <br />{" "}
              <span className="text-[1.7rem] md:text-[2.2rem] text-neutral-900 font-medium">
                Traditional Problems<span className="text-preply-green">.</span>
              </span>
            </p>

            <p className="text-sm sm:text-base max-w-lg mt-[1rem] text-neutral-700">
              Preply streamlines your interview preparation by providing
              personalized practice sessions, real-time feedback, and expert
              guidance. We eliminate the stress of scattered resources and
              uncertainty, helping you build confidence and master the skills
              needed to land your dream job.
            </p>
          </div>

          <Image
            src={Absorbed}
            className="w-55 xs:w-60 sm:w-62"
            alt="Man absorbed in reading CVs"
          />
        </div>
      </div>
    </section>
  );
}
