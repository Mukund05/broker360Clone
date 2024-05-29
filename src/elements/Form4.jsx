import React, { useState } from "react";
import Roundedq from "../assets/Roundedq.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Form4 = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full flex flex-col gap-8 shadow-2xl p-5 xs:p-10 sm:p-16 rounded-2xl ">
      <div className="flex flex-col gap-2">
        <span className=" gap-4 text-[#686868] font-bold text-start flex text-2xl sm:text-3xl items-center">
          Comisión compartida <img className="px-3 w-12 h-6" src={Roundedq} />
        </span>
        <span className="text-md sm:text-[16px] text-[#686868] text-start">
          Puedes compartirla la comisión de esta propiedad con otros asesores en
          tu red.
        </span>
      </div>
      <div className="flex justify-start  items-start sm:items-center gap-x-6 flex-col sm:flex-row">
        <div className="w-1/6 flex justify-start ">
          <span className="text-[#686868] text-start text-sm sm:text-md font-bold py-2">
            Compartir comisión
          </span>
        </div>
        <div className="px-4 py-2  flex justify-center w-full sm:w-2/3 gap-2 border rounded-md border-[#D9D9D9]">
          <div
            className={`font-bold ${
              active === 0 && "text-white bg-[#011B4E]"
            }  rounded-md w-1/2  p-2 text-[#011B4E] cursor-pointer`}
            onClick={() => setActive(0)}
          >
            Si
          </div>
          <div
            className={`font-bold ${
              active === 1 && "text-white bg-[#011B4E]"
            }  rounded-md w-1/2  p-2 text-[#011B4E] cursor-pointer`}
            onClick={() => setActive(1)}
          >
            No
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-8 items-center">
        <div className="w-1/6 flex justify-start ">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Comisión
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-1/3 sm:w-1/6 border border-[#8692A6] rounded-md">
          <input placeholder="5" className=" overflow-hidden w-full  " />
          <KeyboardArrowDownIcon />
        </div>
        <span className="font-bold text-[#6E6E70] text-xl">%</span>
      </div>
      <div className="flex justify-start  items-start sm:items-center gap-x-6 flex-col sm:flex-row">
        <div className="w-full sm:w-1/6 flex justify-start ">
          <span className="text-[#686868] text-start text-sm sm:text-md font-bold py-2">
            Condiciones para compartir
          </span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <textarea
            placeholder="Descripción"
            className=" overflow-hidden w-full"
            rows={6}
            col={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Form4;
