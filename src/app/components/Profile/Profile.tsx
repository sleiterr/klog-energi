import React from "react";
import Image from "next/image";
import BrianImage from "../../../../public/images/Brian-Vad.jpg"; // Adjust the path as necessary

const Profile = () => {
  return (
    <section>
      <div className="">
        <div className="">
          <Image src={BrianImage} alt="Profile" width={936} height={800} />
        </div>
        <div className="">
          <div className="">
            <h2>Brian Vad Mathiesen</h2>
            <p>Debattens keynote speaker</p>
          </div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur. At adipiscing id duis sed
            libero commodo suspendisse. Convallis tincidunt adipiscing integer
            venenatis egestas at in. Morbi adipiscing sed est nec vitae. Aenean
            egestas vitae massa quisque facilisis sollicitudin nunc.
            Pellentesque posuere nunc tincidunt nunc. In aliquam odio laoreet
            suscipit ipsum. Sed at integer molestie urna quis ut diam leo
            rutrum.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
