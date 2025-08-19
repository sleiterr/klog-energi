import React from "react";
import Image from "next/image";
import {
  Elektricitet,
  Purpose,
  Godkendt,
  Liste,
  Lokation,
  Skib,
  Skole,
  Examination,
  Tool,
  Vind,
} from "../../../../public/iconExports/index";

const Featured = () => {
  return (
    <section className="bg-debate mx-4 rounded-2xl mb-[120px]">
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <h2 className="font-semibold text-6xl text-debaten pb-[42px]">
          I Nordvestjylland har vi
        </h2>
        <div className="grid grid-cols-[530px_2fr] gap-4">
          <ul className="flex flex-col items-start justify-start gap-4">
            <li className="flex items-start justify-start gap-4">
              <Image
                src={Lokation}
                alt="Lokation Icon"
                width={24}
                height={24}
              />
              <p className="font-light text-featured text-lg">
                Arealer til sol, vind, Power-to-X og ilandføringer fra Nordsøen
              </p>
            </li>
            <li className="flex items-start justify-start gap-4">
              <Image src={Tool} alt="Tool Icon" width={24} height={24} />
              <p className="font-light text-featured text-lg">
                Servicehavne til vindparker i Nordsøen, Thorsminde og Thyborøn
              </p>
            </li>
            <li className="flex items-start justify-start gap-4">
              <Image src={Vind} alt="Vind Icon" width={24} height={24} />
              <p className="font-light text-featured text-lg">
                Nærhed til grøn strøm fra Nordsøen
              </p>
            </li>
            <li className="flex items-start justify-start gap-4">
              <Image src={Purpose} alt="Purpose Icon" width={24} height={24} />
              <p className="font-light text-featured text-lg">
                Effektiv planlægning på tværs af sektorer og i samspil med
                projektudviklere og borgere
              </p>
            </li>
            <li className="flex items-start justify-start gap-4">
              <Image
                src={Examination}
                alt="Examination Icon"
                width={24}
                height={24}
              />
              <p className="font-light text-featured text-lg">
                Et afgørende bidrag til et forbedret grønt BNP
              </p>
            </li>
          </ul>

          <ul className="flex flex-col itemsstart justify-start gap-4 w-132">
            <li className="flex items-start justify-start gap-4">
              <Image src={Liste} alt="Liste Icon" width={24} height={24} />
              <p className="font-light text-featured text-lg">
                Nærhed til produktion af grønt CO2 fra biogasanlæg
              </p>
            </li>
            <li className="flex items-start justify-start gap-4">
              <Image src={Skole} alt="Skole Icon" width={24} height={24} />
              <p className="font-light text-featured text-lg">
                Uddannelsesinstitutioner, der ønsker at udvikle fremtidens
                Power-to-X kompetencer
              </p>
            </li>
            <li className="flex items-start justify-start gap-4">
              <Image
                src={Elektricitet}
                alt="Elektricitet Icon"
                width={24}
                height={24}
              />
              <p className="font-light text-featured text-lg">
                Forstærket el-transmissionsnet mellem Idomlund og Endrup
              </p>
            </li>
            <li className="flex items-start justify-start gap-4">
              <Image src={Skib} alt="Skib Icon" width={24} height={24} />
              <p className="font-light text-featured text-lg">
                Udskibningshavn til vindprojekter i Nordsøen og udskibning af
                fremtidens brændstoffer i Thyborøn
              </p>
            </li>

            <li className="flex items-start justify-start gap-4">
              <Image
                src={Godkendt}
                alt="Godkendt Icon"
                width={24}
                height={24}
              />
              <p className="font-light text-featured text-lg">
                Fremtidens kompetencer til Power-to-X: Håndværkere, leverandører
                til vindindustrien og kemisk virksomhed, kompetencer fra kemisk
                virksomhed, mv.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Featured;
