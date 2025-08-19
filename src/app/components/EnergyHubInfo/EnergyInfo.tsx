import React from "react";

const EnergyInfo = () => {
  return (
    <section>
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <h2 className="font-semibold text-6xl text-primary leading-[90px]">
          Klog Energi er grøn omstilling på nordvestjysk
        </h2>
        <div className="grid grid-cols-[2fr_580px] items-start gap-4">
          <ul className="flex flex-col items-start gap-4">
            <li>
              <p className="font-light text-lg text-primary leading-[27px]">
                Nordvestjylland har siden 90’erne drevet udbygningen af grøn
                energi i Danmark. Med teknologi, viden og ressourcer har
                Danmarks centrum for klog og ren energi bidraget væsentligt til
                hele landets grønne omstilling.
              </p>
            </li>
            <li>
              <p className="font-light text-lg text-primary leading-[27px]">
                Det nordvestjyske samarbejde Klog Energi består af Lemvig,
                Struer og Holstebro Kommune og er en af forudsætningerne for, at
                ikke blot Danmark, men hele Europa kan indfri ambitionerne for
                grøn omstilling og CO2-reduktioner.
              </p>
            </li>
            <li>
              <p className="font-light text-lg text-primary leading-[27px]">
                Landsdelen er et centrum for vedvarende energi og en vigtig hub
                for produktion, transformation og distribution af grøn energi.
                Nationale og internationale aktører er allerede ved at etablere
                sig i området, der som hele Danmarks grønne energipioner har
                masser af viden, ekspertise og plads til grønne projekter.
                Danmark kommer bedst i mål med Klog Energi.
              </p>
            </li>
          </ul>
          <ul className="flex flex-col items-start justify-start gap-4">
            <li>
              <p className="font-light text-lg text-primary leading-[27px]">
                For intet er umuligt i mulighedernes Nordvestjylland. Klog
                Energi er vedvarende og grøn. Det er erfaring i at arbejde
                sammen med lokalbefolkningen. Det er motivation for at sætte den
                politiske dagsorden, så videreforædlingen af energi når nye
                højder. Det er gevinsten der opstår, når vi samarbejder om grøn
                omstilling.
              </p>
            </li>
            <li>
              <p className="font-light text-lg text-primary leading-[27px]">
                Nordvestjylland har fremtidens kompetencer inden for Power-to-X
                og vil med de rette partnerskaber uddanne fremtidens VE- og
                PtX-talenter til gavn for hele landet. Det er Klog Energi – og
                et Danmark i bedre balance.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EnergyInfo;
