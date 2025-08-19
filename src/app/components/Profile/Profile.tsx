import React from "react";
import Image from "next/image";
import BrianImage from "../../../../public/images/Brian-Vad.png"; // Adjust the path as necessary
import Layer from "../../../../public/icons/Layer_1.png";

const Profile = () => {
  return (
    <section>
      <div className="py-[120px] px-4 mx-auto max-w-5x1 flex items-center justify-center gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={BrianImage}
            alt="Profile"
            width={936}
            height={800}
            className="rounded-2xl clip-path-left object-cover"
          />
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src={Layer}
              alt="icon"
              className="absolute translate-x-1/2 top-15 right-32"
            />
            <div className="flex flex-col items-start mb-4">
              <h2 className="font-semibold text-6xl text-primary leading-[90px] w-lg">
                Brian Vad Mathiesen
              </h2>
              <p className="font-semibold text-primary text-xs">
                Debattens keynote speaker
              </p>
            </div>
            <div className="">
              <p className="font-light text-primary text-lg w-[530px]">
                Lorem ipsum dolor sit amet consectetur. At adipiscing id duis
                sed libero commodo suspendisse. Convallis tincidunt adipiscing
                integer venenatis egestas at in. Morbi adipiscing sed est nec
                vitae. Aenean egestas vitae massa quisque facilisis sollicitudin
                nunc. Pellentesque posuere nunc tincidunt nunc. In aliquam odio
                laoreet suscipit ipsum.
                <span className="block pt-4">
                  Sed at integer molestie urna quis ut diam leo rutrum.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
