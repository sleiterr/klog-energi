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
    <section>
      <div className="">
        <h2>I Nordvestjylland har vi</h2>
        <div className="grid grid-cols-2">
          <ul>
            <li className="">
              <Image
                src={Lokation}
                alt="Lokation Icon"
                width={50}
                height={50}
              />
              <p>
                Arealer til sol, vind, Power-to-X og ilandføringer fra Nordsøen
              </p>
            </li>
            <li>
              <Image src={Tool} alt="Tool Icon" width={50} height={50} />
              <p>
                Servicehavne til vindparker i Nordsøen, Thorsminde og Thyborøn
              </p>
            </li>
            <li>
              <Image src={Vind} alt="Vind Icon" width={50} height={50} />
              <p>Nærhed til grøn strøm fra Nordsøen</p>
            </li>
            <li>
              <Image src={Purpose} alt="Purpose Icon" width={50} height={50} />
              <p>
                Effektiv planlægning på tværs af sektorer og i samspil med
                projektudviklere og borgere
              </p>
            </li>
            <li>
              <Image
                src={Examination}
                alt="Examination Icon"
                width={50}
                height={50}
              />
              <p>Et afgørende bidrag til et forbedret grønt BNP</p>
            </li>
          </ul>

          <ul>
            <li>
              <Image src={Liste} alt="Liste Icon" width={50} height={50} />
              <p>Nærhed til produktion af grønt CO2 fra biogasanlæg</p>
            </li>
            <li>
              <Image src={Skole} alt="Skole Icon" width={50} height={50} />
              <p>
                Uddannelsesinstitutioner, der ønsker at udvikle fremtidens
                Power-to-X kompetencer
              </p>
            </li>
            <li>
              <Image
                src={Elektricitet}
                alt="Elektricitet Icon"
                width={50}
                height={50}
              />
              <p>Forstærket el-transmissionsnet mellem Idomlund og Endrup</p>
            </li>
            <li>
              <Image src={Skib} alt="Skib Icon" width={50} height={50} />
              <p>
                Udskibningshavn til vindprojekter i Nordsøen og udskibning af
                fremtidens brændstoffer i Thyborøn
              </p>
            </li>

            <li>
              <Image
                src={Godkendt}
                alt="Godkendt Icon"
                width={50}
                height={50}
              />
              <p>
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
