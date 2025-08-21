import React from "react";
import Image from "next/image";
import BrianImage from "/public/images/Brian-Vad.png"; // Adjust the path as necessary
import Layer from "/public/icons/Layer_1.png";

const Profile = () => {
  return (
    <section>
      <div className="py-30 px-4 mx-auto flex items-center justify-center gap-4 ">
        <ProfileItem
          src={BrianImage}
          icon={Layer}
          name=" Brian Vad Mathiesen"
          subtitle="Debattens keynote speaker"
          text="Lorem ipsum dolor sit amet consectetur. At adipiscing id duis
                sed libero commodo suspendisse. Convallis tincidunt adipiscing
                integer venenatis egestas at in. Morbi adipiscing sed est nec
                vitae. Aenean egestas vitae massa quisque facilisis sollicitudin
                nunc. Pellentesque posuere nunc tincidunt nunc. In aliquam odio
                laoreet suscipit ipsum."
          quote="Sed at integer molestie urna quis ut diam leo rutrum."
        />
      </div>
    </section>
  );
};

export default Profile;

const ProfileItem = ({ src, icon, name, subtitle, text, quote }) => {
  return (
    <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-4">
      <Image
        src={src}
        alt="Profile"
        className="rounded-2xl clip-path-left object-cover w-[520px] h-[300px] lg:w-[58.5rem] lg:h-[50rem]"
      />
      <div className="relative flex flex-col items-start">
        <Image
          src={icon}
          alt="icon"
          className="absolute translate-x-1/2 -top-10 right-15 hidden lg:block"
        />
        <div className="flex flex-col items-start gap-4 pt-4 lg:pt-0 lg:gap-0 mb-2 lg:mb-0 px-0 lg:px-0 w-[24rem] lg:w-[33rem]">
          <h2 className="font-semibold text-4xl lg:text-6xl text-primary xl:leading-[90px]">
            {name}
          </h2>
          <p className="font-semibold text-primary text-xs">{subtitle}</p>
        </div>
        <div className="w-[24rem] lg:w-[33rem] px-0 lg:px-0">
          <p className="font-light text-primary text-base lg:text-lg">
            {text}
            <span className="block pt-4">{quote}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
