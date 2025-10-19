import Image from "next/image";
import Absorbed from "@/public/illustrations/undraw_absorbed.png";

export default function TextAndImage() {
  return (
    <section>
      {/* TODO: Add more of these components. We might choose a for loop to render multiple components (assuming we have the texts and images ready and the component will stay mostly the same with minimal changes) */}
      <div className="flex justify-center font-sans mt-[8rem]">
        <div className="flex gap-x-[12rem]">
          <div>
            <p className="font-sans text-[18px] text-neutral-700 leading-tight">
              A modern approach to <br />{" "}
              <span className="text-[36px] text-neutral-900 font-medium">
                Traditional Problems<span className="text-preply-green">.</span>
              </span>
            </p>

            <p className="max-w-lg mt-[1.1rem] text-neutral-700">
              Preply streamlines your interview preparation by providing
              personalized practice sessions, real-time feedback, and expert
              guidance. We eliminate the stress of scattered resources and
              uncertainty, helping you build confidence and master the skills
              needed to land your dream job.
            </p>
          </div>

          <Image
            src={Absorbed}
            className="w-50"
            alt="Man absorbed in reading CVs"
          />
        </div>
      </div>
    </section>
  );
}
