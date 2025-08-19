import React from "react";

export const About = () => {
  return (
    <section className="py-[120px] mx-auto px-50 max-w-5x1">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col items-end justify-start">
          <div className="pb-4">
            <h2 className="font-semibold text-6xl text-primary text-right w-md">
              Debatten om Klog Energi
            </h2>
          </div>
          <span className="font-semibold text-xl text-primary text-right">
            20. januar 2024
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 w-lg">
          <p className="font-light text-lg text-primary leading-[27px]">
            Debatten om Klog Energi er en betydningsfuld energikonference på
            Christiansborg. Her får politiske beslutningstagere inden for grøn
            omstilling en unik mulighed for at høste erfaringer fra Danmarks
            centrum for klog og grøn energi, Nordvestjylland. Som deltager
            kommer du tættere på Nordvestjyllands potentialer og er med til at
            sikre, at de realiseres til gavn for hele Danmark.
          </p>
          <p className="font-light text-lg text-primary leading-[27px]">
            Området har siden 90’erne været en vigtig, grøn VE-pioner med
            Nordsøen som nabo og er allerede rustet til fremtiden inden for
            videreforædling af energi - Power-to-X. Her buldrer udviklingen
            afsted, og både danske og internationale virksomheder er ved at
            etablere sig.
          </p>
          <p className="font-light text-lg text-primary leading-[27px]">
            Potentialet i landsdelen er med andre ord kolossalt, og det stærke
            fundament gør allerede en mærkbar forskel i målene for grøn
            omstilling og CO2-reduktionerne for hele landet.
          </p>
          <p className="font-light text-lg text-primary leading-[27px]">
            Danmark kommer bedst i mål med Nordvestjylland, men det kræver et
            øget, politisk fokus på konkrete dilemmaer – både lokale og
            nationale - som eksperter, foregangsvirksomheder og politikere
            forholder sig til i Debatten om Klog Energi. Den skal du ikke gå
            glip af, hvis du vil påvirke den grønne omstilling
          </p>
        </div>
      </div>
    </section>
  );
};
