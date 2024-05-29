import React from "react";

import img1 from "../assets/landingpage1.png";
import img2 from "../assets/landingpage2.png";

const Landingpageimg = () => {
  return (
    <div className="h-[500px] py-12">
      <div className="relative  bg-[#6E6E70] h-2/5 sm:h-3/5 md:h-5/6 w-3/4 sm:w-4/5 rounded-2xl left-8 sm:left-14">
        <img
          src={img1}
          className="absolute top-12  sm:top-24 left-16 sm:left-20  md:left-28 lg:left-40 xl:left-48 cs:left-80   w-fit "
        />
        <img
          src={img2}
          className="absolute w-36 top-24 xs:top-24 xs:left-[-1rem] xs:w-44  sm:w-72  sm:top-44 sm:left-[-2.5rem]  lg:left-[-5rem] lg:top-52 md:w-[22rem] md:left-0 md:top-48 lg:w-fit xl:left-2"
        />
      </div>
    </div>
  );
};

export default Landingpageimg;
