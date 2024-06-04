import React, { useState } from "react";
import Roundedq from "../assets/Roundedq.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Form2 = ({ propertyData, onFormDataChange }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full flex flex-col gap-5 shadow-2xl p-5 xs:p-8 sm:p-12 rounded-2xl">
      <span className="text-[#686868] font-bold text-start flex text-xl sm:text-2xl items-center">
        Ubicación <img className="px-3 w-12 h-6" src={Roundedq} />
      </span>

      {/* <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold"></span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input placeholder="México" className=" overflow-hidden w-full  " />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div> */}

      {/* <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold"></span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input placeholder="Cancún" className=" overflow-hidden w-full  " />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div> */}
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Calle
          </span>
        </div>
        <div className="w-full sm:w-2/3 flex gap-3 ">
          <div className="p-2 px-4 flex justify-between w-2/3 border border-[#8692A6] rounded-md">
            <input
              placeholder="Calle"
              className=" overflow-hidden w-full  "
              name="typstreete"
              value={propertyData.street}
              onChange={(e) =>
                onFormDataChange({ ...propertyData, street: e.target.value })
              }
            />
          </div>
          <div className="p-2 px-4 flex justify-between w-2/3 border border-[#8692A6] rounded-md">
            <input placeholder="Número" className=" overflow-hidden w-full  " />
          </div>
          <div className="p-2 px-4 flex justify-between w-2/3 border border-[#8692A6] rounded-md">
            <input
              placeholder="Interior"
              className=" overflow-hidden w-full  "
              name="corner_with"
              value={propertyData.corner_with}
              onChange={(e) =>
                onFormDataChange({
                  ...propertyData,
                  corner_with: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Esquina con
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Ninguno"
            className=" overflow-hidden w-full  "
            name="postal_code"
            value={propertyData.postal_code}
            onChange={(e) =>
              onFormDataChange({ ...propertyData, postal_code: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex  justify-start gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Código postal
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-center   border border-[#8692A6] rounded-md w-full sm:w-1/4">
          <input placeholder="Ninguno" className=" overflow-hidden w-full  " />
        </div>
      </div>

      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold"></span>
          <span className="text-red-600"></span>
        </div>
        <div className="flex justify-between w-full sm:w-2/3  rounded-md">
          {" "}
          <iframe
            title="Embedded Google Map"
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d50597.87088943464!2d-59.02624100016744!3d-34.096484500267904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x95bb0bd1a2b1c4af%3A0x4bb90e05802045e8!2sAv.%20Rivadavia%20942%2C%20B2800%20Z%C3%A1rate%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!3m2!1d-34.096472199999996!2d-59.0268982!4m5!1s0x95bb0bd1a2b1c4af%3A0x4bb90e05802045e8!2sAv.%20Rivadavia%20942%2C%20B2800%20Z%C3%A1rate%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!3m2!1d-34.096472199999996!2d-59.0268982!5e0!3m2!1sen!2s!4v1649050342672!5m2!1sen!2s"
            style={{ border: 0 }}
            loading="lazy"
            className="rounded-3xl w-full h-60"
          ></iframe>
        </div>
      </div>
      {/* <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Mostrar precios en el anuncio
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
      </div> */}
    </div>
  );
};

export default Form2;
