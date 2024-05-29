import React from "react";

const Tagline = () => {
  return (
    <div className="  max-h-8  w-full flex justify-center gap-x-4 p-2 pb-8 text-sm font-medium  px-3 text-[#FF9203]">
      <span className="text-xs flex justify-between">
        <div className="">©2024 Broker360</div>
        <div className="text-[#C7C7D1] ps-2">|</div>
      </span>
      <span className="text-xs inline cursor-pointer">
        Todos los derechos reservados
      </span>
    </div>
  );
};

export default Tagline;
