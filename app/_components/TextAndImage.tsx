import { Lexend_Deca } from "next/font/google";
import Image from "next/image";
import Absorbed from "@/public/illustrations/undraw_absorbed.png";

const lexend = Lexend_Deca({ subsets: ["latin"] });

// TODO: After this section is done, send classnames to globals.css and use them here for readability

export default function TextAndImage() {
  return (
    <section>
      <div className="flex justify-center font-sans mt-[10rem]">
        <div className="flex gap-x-[12rem]">
          <div>
            <p
              className={`${lexend.className} text-[20px] text-neutral-900 leading-tight`}
            >
              A Modern Approach to <br />{" "}
              <span className="text-[36px] text-neutral-900">
                Traditional Problems<span className="text-preply-green">.</span>
              </span>
            </p>

            {/* TODO: Edit text */}
            <p className="max-w-lg mt-[1.1rem] text-neutral-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              vitae nihil odio, quo cupiditate illo! Eius maiores id explicabo
              quam, illo, exercitationem ut voluptate provident incidunt aliquam
              totam odit tenetur!
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
