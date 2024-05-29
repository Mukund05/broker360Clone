import React from "react";

const Card = ({ heading, para }) => {
  return (
    <div className=" p-6 flex flex-col gap-y-3  font-semibold rounded-lg shadow-xl w-full h-full">
      <h2 className="text-[#ff9203] text-sm">{heading}</h2>
      <p className="text-[#011B4E] text-sm">{para}</p>
    </div>
  );
};

export default Card;
