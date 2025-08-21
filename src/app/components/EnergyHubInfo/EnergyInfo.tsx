import React from "react";

const EnergyInfo = () => {
  return (
    <section id="Energi">
      <div className="px-4 py-[120px] mx-auto md:px-50 max-w-5x1">
        <h2 className="font-semibold text-4xl md:text-6xl text-primary md:leading-[1.2]">
          Klog Energi er grøn omstilling på nordvestjysk
        </h2>
        <div className="md:grid md:grid-cols-[2fr_580px] gap-4">
          <ul className="space-y-4">
            <EnergyInfoItem>
              Det nordvestjyske samarbejde Klog Energi består af Lemvig, Struer
              og Holstebro Kommune og er en af forudsætningerne for, at ikke
              blot Danmark men hele Europa kan indfri ambitionerne for
            </EnergyInfoItem>
            <EnergyInfoItem>
              Det nordvestjyske samarbejde Klog Energi består af Lemvig, Struer
              og Holstebro Kommune og er en af forudsætningerne for, at ikke
              blot Danmark, men hele Europa kan indfri ambitionerne for grøn
              omstilling og CO2-reduktioner.
            </EnergyInfoItem>
            <EnergyInfoItem>
              Landsdelen er et centrum for vedvarende energi og en vigtig hub
              for produktion, transformation og distribution af grøn energi.
              Nationale og internationale aktører er allerede ved at etablere
              sig i området, der som hele Danmarks grønne energipioner har
              masser af viden, ekspertise og plads til grønne projekter. Danmark
              kommer bedst i mål med Klog Energi.
            </EnergyInfoItem>
          </ul>
          <ul className="space-y-4">
            <EnergyInfoItem>
              For intet er umuligt i mulighedernes Nordvestjylland. Klog Energi
              er vedvarende og grøn. Det er erfaring i at arbejde sammen med
              lokalbefolkningen. Det er motivation for at sætte den politiske
              dagsorden, så videreforædlingen af energi når nye højder. Det er
              gevinsten der opstår, når vi samarbejder om grøn omstilling.
            </EnergyInfoItem>
            <EnergyInfoItem>
              Nordvestjylland har fremtidens kompetencer inden for Power-to-X og
              vil med de rette partnerskaber uddanne fremtidens VE- og
              PtX-talenter til gavn for hele landet. Det er Klog Energi – og et
              Danmark i bedre balance.
            </EnergyInfoItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EnergyInfo;

const EnergyInfoItem = ({ children }) => (
  <li>
    <p className="font-light text-lg text-primary leading-[27px]">{children}</p>
  </li>
);
