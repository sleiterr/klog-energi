"use client";
import React from "react";
import Image from "next/image";
import BlurText from "../animation/BlurText";

const Debate = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <section
      className="bg-debate mx-4 rounded-2xl debate min-w-xs max-w-md sm:max-w-sm md:max-w-md lg:max-w-full"
      id="debate"
    >
      <div className="md:py-[7.5rem] py-[3.7rem] px-4 md:mx-auto md:px-50 xl:max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 lg:mb-10">
            <h2 className="font-semibold text-3xl w-3xs lg:w-auto lg:text-6xl text-debaten xl:pb-[4.2rem] px-4 md:px-0">
              <BlurText
                text=" Program for debatten"
                delay={150}
                animateBy="words"
                direction="top"
                animationFrom={undefined}
                animationTo={undefined}
                onAnimationComplete={handleAnimationComplete}
              />
            </h2>
            <ul
              className="flex flex-col justify-center items-center gap-5 w- xl:w-lg xl:max-[804px]:w-full xl:min-w-[590px] mb-6 after:content-[''] 
               after:block 
               after:w-[100%] 
               after:h-[1px] 
               after:bg-[#1D3F33]"
            >
              <DebateContent
                subtitle="Sport 1"
                text="Fundamentet for den kloge energi er på plads. Hvordan udnytter Danmark Nordvestjyllands potentialer for klog og grøn          energi?"
              />
              <DebateContent
                subtitle="Sport 2"
                text="Hvordan løser vi konkrete udfordringer og sætter turbo på hele Danmarks grønne omstilling?"
              />
            </ul>

            <ul className="flex flex-col items-center lg:items-start">
              <DebateItem
                src="/debaten/Rectangle-10.png"
                name="Keynote speaker"
                title="Brian Vad Mathiesen, Titel"
              />
              <DebateItem
                src="/debaten/Rectangle-11.png"
                name="Moderator"
                title="Connie Hedegaard, Titel"
              />
              <DebateItem
                src="/debaten/Rectangle-12.png"
                name="Moderator"
                title="Connie Hedegaard, Titel"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Debate;

const DebateItem = ({ src, name, title }) => (
  <li className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-4 lg:mb-6 mb-4 last:mb-0">
    <Image src={src} alt="" width={80} height={80} className="rounded-full" />
    <div className="">
      <h4 className="font-semibold text-debaten text-lg lg:text-xl">{title}</h4>
      <p className="font-light text-debaten text-lg">{name}</p>
    </div>
  </li>
);

const DebateContent = ({ subtitle, text }) => (
  <li className="px-4 md:px-0">
    <span className="font-semibold text-xs text-debaten">{subtitle}</span>
    <p className="font-semibold text-lg lg:text-xl text-debaten">{text}</p>
  </li>
);
