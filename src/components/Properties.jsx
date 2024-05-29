import React from "react";
import CustomHeader from "../elements/CustomHeader";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import PropertyCard from "../elements/PropertyCard";
import Footer from "../elements/Footer";

const Properties = () => {
  return (
    <div className="bg-[#eff6ff]">
      <CustomHeader index={1} />
      <div className=" py-4">
        <div className="flex gap-1 flex-col">
          <div className="flex justify-between md:w-1/2 pr-10"></div>
          <div className="flex flex-col md:flex-row gap-x-4 my-6 gap-y-8">
            <div className="w-[90%] md:w-1/2 border-xl flex justify-between mx-auto">
              {/* Render iframe with random map by default */}
              <div className="overflow-hidden flex  justify-end w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d50597.87088943464!2d-59.02624100016744!3d-34.096484500267904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x95bb0bd1a2b1c4af%3A0x4bb90e05802045e8!2sAv.%20Rivadavia%20942%2C%20B2800%20Z%C3%A1rate%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!3m2!1d-34.096472199999996!2d-59.0268982!4m5!1s0x95bb0bd1a2b1c4af%3A0x4bb90e05802045e8!2sAv.%20Rivadavia%20942%2C%20B2800%20Z%C3%A1rate%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!3m2!1d-34.096472199999996!2d-59.0268982!5e0!3m2!1sen!2s!4v1649050342672!5m2!1sen!2s"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="rounded-3xl  md:rounded-s-none  w-full h-[400px] md:h-[500px] overflow-hidden"
                ></iframe>
              </div>
            </div>
            <div className="md:w-3/4 flex flex-col gap-y-2 gap-x-4 pe-8 px-4">
              <div className="flex flex-wrap gap-y-4 justify-start text-[#6E6E70] gap-x-2 sm:gap-x-4 ">
                <div className="border border-[#6E6E70] rounded-lg p-2 bg-white relative w-fit text-xs sm:text-sm flex justify-between flex-col xs:flex-row px-5 cursor-pointer hover:bg-[#011b4e]  hover:text-white">
                  <span>Ubicación</span>
                </div>
                <div className="border border-[#6E6E70] rounded-lg p-2 bg-white relative w-fit text-xs sm:text-sm flex justify-between flex-col xs:flex-row px-5 cursor-pointer hover:bg-[#011b4e]  hover:text-white">
                  Operación
                </div>
                <div className="border border-[#6E6E70] rounded-lg p-2 bg-white relative w-fit cursor-pointer text-xs sm:text-sm  flex justify-between flex-col xs:flex-row px-5 hover:bg-[#011b4e]  hover:text-white">
                  Precio
                </div>
                <div className="border border-[#6E6E70] rounded-lg p-2 bg-white relative w-fit cursor-pointer text-xs sm:text-sm  flex justify-between flex-col xs:flex-row px-5 hover:bg-[#011b4e]  hover:text-white">
                  Tipo de propiedad
                </div>
                <div className="border border-[#6E6E70] rounded-lg p-2 bg-white relative w-fit cursor-pointer text-xs sm:text-sm  flex justify-between flex-col xs:flex-row px-5 hover:bg-[#011b4e]  hover:text-white">
                  Ordenar
                </div>
              </div>
              <div className="border-t border-[#6E6E70] my-4"></div>
              <div className="flex justify-between md:w-2/3 gap-x-6 items-center  sm:m-0">
                <span className="text-[#FF9203] text-sm sm:text-md font-bold">
                  1-2 de 3 propiedades
                </span>
              </div>
              <div className="flex flex-col gap-y-8 md:flex-row gap-x-2 flex-wrap items-center justify-between">
                <PropertyCard
                  heading="svdhasvdhasvhdbahsd"
                  content="ahgdfahsgvdasbhd"
                  route="/properties/property-details"
                />
                <PropertyCard
                  heading="svdhasvdhasvhdbahsd"
                  content="ahgdfahsgvdasbhd"
                  route="/properties/property-details"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
