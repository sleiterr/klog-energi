"use client";
import React from "react";
import BlurText from "../animation/BlurText";
import clsx from "clsx";

export const About = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="" id="about">
      <div className="py-[60px] px-4 md:py-[120px] md:mx-auto md:px-4 md:max-w-7xl">
        <div className="grid grid-col-2 gap-4 md:grid-cols-2 lg:gap-10">
          <div className="flex flex-col justify-center md:items-end md:justify-start">
            <div className="">
              <h2
                className={clsx(
                  "font-semibold text-4xl md:text-6xl text-primary text-left md:text-right md:w-[30rem] leading-[1.2] pb-4"
                )}
              >
                <BlurText
                  text="Debatten om Klog Energi"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  animationFrom={undefined}
                  animationTo={undefined}
                  onAnimationComplete={handleAnimationComplete}
                />
              </h2>
              {/* <h2 className="font-semibold text-4xl md:text-6xl text-primary text-left md:text-right md:w-[30rem] leading-[1.2]">
                Debatten om Klog Energi
              </h2> */}
            </div>
            <span className="font-semibold text-lg lg:text-xl text-primary text-left lg:text-right">
              <BlurText
                text="20. januar 2024"
                delay={150}
                animateBy="words"
                direction="top"
                animationFrom={undefined}
                animationTo={undefined}
                onAnimationComplete={handleAnimationComplete}
              />
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 w-sm lg:w-lg">
            <AboutItem>
              Debatten om Klog Energi er en betydningsfuld energikonference på
              Christiansborg. Her får politiske beslutningstagere inden for grøn
              omstilling en unik mulighed for at høste erfaringer fra Danmarks
              centrum for klog og grøn energi, Nordvestjylland. Som deltager
              kommer du tættere på Nordvestjyllands potentialer og er med til at
              sikre, at de realiseres til gavn for hele Danmark.
            </AboutItem>
            <AboutItem>
              Området har siden 90’erne været en vigtig, grøn VE-pioner med
              Nordsøen som nabo og er allerede rustet til fremtiden inden for
              videreforædling af energi - Power-to-X. Her buldrer udviklingen
              afsted, og både danske og internationale virksomheder er ved at
              etablere sig.
            </AboutItem>
            <AboutItem>
              Potentialet i landsdelen er med andre ord kolossalt, og det stærke
              fundament gør allerede en mærkbar forskel i målene for grøn
              omstilling og CO2-reduktionerne for hele landet.
            </AboutItem>
            <AboutItem>
              Danmark kommer bedst i mål med Nordvestjylland, men det kræver et
              øget, politisk fokus på konkrete dilemmaer – både lokale og
              nationale - som eksperter, foregangsvirksomheder og politikere
              forholder sig til i Debatten om Klog Energi. Den skal du ikke gå
              glip af, hvis du vil påvirke den grønne omstilling
            </AboutItem>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutItem = ({ children }) => {
  return (
    <p className="font-light text-base2 lg:text-lg text-primary leading-normal">
      {children}
    </p>
  );
};
