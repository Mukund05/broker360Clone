import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";
const PaymentCard = ({ title, price, route }) => {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-[1.8rem] min-w-2/3 md:min-w-8 flex flex-col justify-center items-center text-center  bg-white cursor-pointer mx-4 xs:mx-0"
      onClick={() => {
        navigate(route);
      }}
    >
      <div className=" rounded-t-[1.8rem] text-3xl xs:text-xl sm:text-2xl bg-gradient-to-r from-orange-500 to-yellow-500 p-6 sm:p-8  font-bold text-[#011b4e] w-full">
        {title}
      </div>
      <div className="flex flex-col text-[#011b4e] gap-y-6">
        <h3 className="text-[#6E6E70] pt-4 font-semibold  text-md xs:text-xl sm:text-2xl">
          INCLUYE:
        </h3>
        <ul className="sm:text-sm md:text-md px-4 flex flex-col gap-y-3 font-semibold text-left ">
          <li className="text-[#011B4E] flex items-center justify-center gap-2">
            <CheckCircleOutlineIcon />
            Lorem ipsum dolor sit amet consectetur.
          </li>
          <li className="text-[#011B4E] flex items-center justify-center gap-2">
            <CheckCircleOutlineIcon />
            Lorem ipsum dolor sit amet consectetur.
          </li>
          <li className="text-[#011B4E] flex items-center justify-center gap-2">
            <CheckCircleOutlineIcon />
            Lorem ipsum dolor sit amet consectetur.
          </li>
          <li className="text-[#6E6E70] flex items-center justify-center gap-2">
            <CheckCircleOutlineIcon />
            Lorem ipsum dolor sit amet consectetur.
          </li>
          <li className="text-[#6E6E70] flex items-center justify-center gap-2">
            <CheckCircleOutlineIcon />
            Lorem ipsum dolor sit amet consectetur.
          </li>
          <li className="text-[#6E6E70] flex items-center justify-center gap-2">
            <CheckCircleOutlineIcon />
            Lorem ipsum dolor sit amet consectetur.
          </li>
        </ul>
      </div>
      <button className="rounded-b-[1.8rem]  text-3xl xs:text-xl sm:text-2xl bg-gradient-to-b from-white to-orange-500 p-8  font-bold text-[#011b4e] w-full">
        {price}
      </button>
    </div>
  );
};

export default PaymentCard;
