import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <section className="bg-debate mx-4 rounded-2xl" id="featured">
      <div className="py-[7rem] mx-auto px-4 lg:px-50 max-w-5x1 min-w-sm">
        <h2 className="font-semibold text-4xl lg:text-6xl text-debaten pb-8 lg:pb-[2.6rem]">
          I Nordvestjylland har vi
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[33rem_2fr] gap-6 lg:gap-4">
          <ul className="space-y-4">
            <FeaturedItem
              src="/icons/Lokation.svg"
              alt="Lokation Icon"
              text="Arealer til sol, vind, Power-to-X og ilandføringer fra Nordsøen"
            />
            <FeaturedItem
              src="/icons/Tool.svg"
              alt="Tool Icon"
              text="Servicehavne til vindparker i Nordsøen, Thorsminde og Thyborøn"
            />
            <FeaturedItem
              src="/icons/Værktøj.svg"
              alt="Vind Icon"
              text="
              Nærhed til grøn strøm fra Nordsøen
              "
            />
            <FeaturedItem
              src="icons/Mål.svg"
              alt="Purpose Icon"
              text="
              Effektiv planlægning på tværs af sektorer og i samspil med
              projektudviklere og borgere
              "
            />
            <FeaturedItem
              src="/icons/Undersøgelse.svg"
              alt="Examination Icon"
              text="
              Et afgørende bidrag til et forbedret grønt BNP
              "
            />
          </ul>

          <ul className="space-y-4 w-full lg:w-132">
            <FeaturedItem
              src="/icons/Landbrug.svg"
              alt="Liste Icon"
              text="
              Nærhed til produktion af grønt CO2 fra biogasanlæg
              "
            />
            <FeaturedItem
              src="/icons/Skole.svg"
              alt="Skole Icon"
              text="
              Uddannelsesinstitutioner, der ønsker at udvikle fremtidens
                Power-to-X kompetencer
              "
            />
            <FeaturedItem
              src="/icons/Elektricitet.svg"
              alt="Elektricitet Icon"
              text="
              Forstærket el-transmissionsnet mellem Idomlund og Endrup
              "
            />
            <FeaturedItem
              src="/icons/Skib.svg"
              alt="Skib Icon"
              text="
              Udskibningshavn til vindprojekter i Nordsøen og udskibning af
                fremtidens brændstoffer i Thyborøn
              "
            />
            <FeaturedItem
              src="/icons/Godkendt.svg"
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
      <Image
        src={src}
        width={24}
        height={24}
        alt={alt}
        className="lg:size-6 size-8"
      />
      <p className="font-light text-featured text-lg">{text}</p>
    </li>
  );
};
