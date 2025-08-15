import React from "react";
import Image from "next/image";

const Debate = () => {
  return (
    <section className="bg-debate-gradient mx-4 rounded-2xl">
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-10">
            <h2 className="font-semibold text-6xl text-debate pb-[42px]">
              Program for debatten
            </h2>
            <ul
              className="flex flex-col justify-center items-center gap-5 w-lg max-[804px]:w-full min-w-[590px] mb-6 after:content-[''] 
               after:block 
               after:w-[590px] 
               after:h-[1px] 
               after:bg-[#1D3F33]"
            >
              <li>
                <span className="font-semibold text-xs text-debate">
                  Sport 1
                </span>
                <p className="font-semibold text-xl text-debate">
                  Fundamentet for den kloge energi er på plads. Hvordan udnytter
                  Danmark Nordvestjyllands potentialer for klog og grøn energi?
                </p>
              </li>
              <li>
                <span className="font-semibold text-xs text-debate">
                  Sport 2
                </span>
                <p className="font-semibold text-xl text-debate">
                  Hvordan løser vi konkrete udfordringer og sætter turbo på hele
                  Danmarks grønne omstilling?
                </p>
              </li>
            </ul>

            <ul className="flex flex-col items-start">
              <li className="flex items-center gap-4 mb-6">
                <Image
                  src="/debaten/Rectangle-10.png"
                  alt=""
                  width={80}
                  height={80}
                />
                <div className="">
                  <h4 className="font-semibold text-debate text-xl">
                    Keynote speaker
                  </h4>
                  <p className="font-light text-debate text-lg">
                    Brian Vad Mathiesen, Titel
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 mb-6">
                <Image
                  src="/debaten/Rectangle-11.png"
                  alt=""
                  width={80}
                  height={80}
                />
                <div className="">
                  <h4 className="font-semibold text-debate text-xl">
                    Moderator
                  </h4>
                  <p className="font-light text-debate text-lg">
                    Connie Hedegaard, Titel
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 mb-6">
                <Image
                  src="/debaten/Rectangle-12.png"
                  alt=""
                  width={80}
                  height={80}
                />
                <div className="">
                  <h4 className="font-semibold text-debate text-xl">Vært</h4>
                  <p className="font-light text-debate text-lg">
                    Thomas Danielsen, Titel
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Debate;
