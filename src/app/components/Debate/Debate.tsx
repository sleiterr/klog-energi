import React from "react";
import Image from "next/image";

const Debate = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="">
          <h2>Program for debatten</h2>
          <ul>
            <li>
              <span>Sport 1</span>
              <p>
                Fundamentet for den kloge energi er på plads. Hvordan udnytter
                Danmark Nordvestjyllands potentialer for klog og grøn energi?
              </p>
            </li>
            <li>
              <span>Sport 1</span>
              <p>
                Hvordan løser vi konkrete udfordringer og sætter turbo på hele
                Danmarks grønne omstilling?
              </p>
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li>
              <Image
                src="/debaten/Rectangle-10.png"
                alt=""
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src="/debaten/Rectangle-11.png"
                alt=""
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src="/debaten/Rectangle-12.png"
                alt=""
                width={50}
                height={50}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Debate;
