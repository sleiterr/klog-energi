import React from "react";
import Image from "next/image";
import BrianImage from "../../../../public/images/Brian-Vad.jpg"; // Adjust the path as necessary

const Profile = () => {
  return (
    <section>
      <div className="py-[120px] mx-auto px-50 max-w-5x1 flex items-center justify-center gap-4">
        <div className="grid grid-cols-2 gap-34">
          <div className="flex justify-center items-center">
            <Image
              src={BrianImage}
              alt="Profile"
              width={936}
              height={800}
              className="h-auto w-auto rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-start mb-4">
              <h2 className="font-semibold text-6xl text-heading-primary leading-[90px] w-lg">
                Brian Vad Mathiesen
              </h2>
              <p className="font-semibold text-content text-xs">
                Debattens keynote speaker
              </p>
            </div>
            <div className="">
              <p className="font-light text-content text-lg w-[530px]">
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
