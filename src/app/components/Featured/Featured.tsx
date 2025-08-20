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
    <section className="bg-debate mx-4 rounded-2xl" id="featured">
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <h2 className="font-semibold text-6xl text-debaten pb-[42px]">
          I Nordvestjylland har vi
        </h2>
        <div className="grid grid-cols-[530px_2fr] gap-4">
          <ul className="flex flex-col items-start justify-start gap-4">
            <FeaturedItem
              src={Lokation}
              alt="Lokation Icon"
              text="Arealer til sol, vind, Power-to-X og ilandføringer fra Nordsøen"
            />
            <FeaturedItem
              src={Tool}
              alt="Tool Icon"
              text="Servicehavne til vindparker i Nordsøen, Thorsminde og Thyborøn"
            />
            <FeaturedItem
              src={Vind}
              alt="Vind Icon"
              text="
              Nærhed til grøn strøm fra Nordsøen
              "
            />
            <FeaturedItem
              src={Purpose}
              alt="Purpose Icon"
              text="
              Effektiv planlægning på tværs af sektorer og i samspil med
              projektudviklere og borgere
              "
            />
            <FeaturedItem
              src={Examination}
              alt="Examination Icon"
              text="
              Et afgørende bidrag til et forbedret grønt BNP
              "
            />
          </ul>

          <ul className="flex flex-col itemsstart justify-start gap-4 w-132">
            <FeaturedItem
              src={Liste}
              alt="Liste Icon"
              text="
              Nærhed til produktion af grønt CO2 fra biogasanlæg
              "
            />
            <FeaturedItem
              src={Skole}
              alt="Skole Icon"
              text="
              Uddannelsesinstitutioner, der ønsker at udvikle fremtidens
                Power-to-X kompetencer
              "
            />
            <FeaturedItem
              src={Elektricitet}
              alt="Elektricitet Icon"
              text="
              Forstærket el-transmissionsnet mellem Idomlund og Endrup
              "
            />
            <FeaturedItem
              src={Skib}
              alt="Skib Icon"
              text="
              Udskibningshavn til vindprojekter i Nordsøen og udskibning af
                fremtidens brændstoffer i Thyborøn
              "
            />
            <FeaturedItem
              src={Godkendt}
              alt="Godkendt Icon"
              text="
              Fremtidens kompetencer til Power-to-X: Håndværkere, leverandører
                til vindindustrien og kemisk virksomhed, kompetencer fra kemisk
                virksomhed, mv.
              "
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Featured;

const FeaturedItem = ({ src, alt, text }) => {
  return (
    <li className="flex items-start justify-start gap-4">
      <Image src={src} alt={alt} width={24} height={24} />
      <p className="font-light text-featured text-lg">{text}</p>
    </li>
  );
};
