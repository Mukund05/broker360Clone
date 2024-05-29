import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import CustomHeader from "../elements/CustomHeader";

import Footer from "../elements/Footer";
import Form1 from "../elements/Form1";
import Form2 from "../elements/Form2";
import Form3 from "../elements/Form3";
import Form4 from "../elements/Form4";

const AddPropertyData = () => {
  const [formNumber, setFormNumber] = useState(0);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };
  return (
    <div className="">
      <CustomHeader index={0} />
      <div className="bg-[#eff6ff] xs:px-4 flex flex-col md:relative md:p-4">
        <Link
          className="md:absolute inline-flex justify-start text-[#011B4E] sm:px-8 gap-3 md:top-6 md:left-4 md:my-0 my-4  mx-4"
          onClick={goBack}
        >
          <KeyboardBackspaceIcon />
          Atrás
        </Link>

        <div className="w-full md:w-[95%]  m-auto flex sm:px-0   flex-col  items-center text-center gap-y-4 justify-between ">
          <div className=" rounded-2xl shadow-2xl flex flex-col gap-y-14 bg-white items-center justify-center w-[85%] my-4 md:my-12">
            {formNumber === 0 && (
              <div className="w-full">
                <Form1 />
                <div className="p-4 sm:p-10 flex gap-5 sm:gap-10 justify-center items-center">
                  <span className="text-[#35278C] font-semibold text-md sm:text-lg cursor-pointer">
                    Cancelar
                  </span>
                  <button
                    className="bg-[#011B4E]  text-white font-semibold py-3 px-5 sm:px-16 rounded-full text-sm sm:text-lg"
                    onClick={() => {
                      setFormNumber(formNumber + 1);
                    }}
                  >
                    Guardar y continuar
                  </button>
                </div>
              </div>
            )}
            {formNumber === 1 && (
              <div className="w-full">
                <Form2 />
                <div className="p-4 sm:p-10 flex gap-10 justify-center items-center">
                  <span
                    className="text-[#35278C] font-semibold text-md sm:text-lg cursor-pointer"
                    onClick={() => {
                      setFormNumber(formNumber - 1);
                    }}
                  >
                    Cancelar
                  </span>
                  <button
                    className="bg-[#011B4E]  text-white font-semibold py-3 px-5 sm:px-16 rounded-full text-sm sm:text-lg"
                    onClick={() => {
                      setFormNumber(formNumber + 1);
                    }}
                  >
                    Guardar y continuar
                  </button>
                </div>
              </div>
            )}
            {formNumber === 2 && (
              <div className="w-full">
                <Form3 />
                <div className="p-4 sm:p-10 flex gap-10 justify-center items-center">
                  <span
                    className="text-[#35278C] font-semibold text-md sm:text-lg cursor-pointer"
                    onClick={() => {
                      setFormNumber(formNumber - 1);
                    }}
                  >
                    Cancelar
                  </span>
                  <button
                    className="bg-[#011B4E]  text-white font-semibold py-3 px-5 sm:px-16 rounded-full text-sm sm:text-lg"
                    onClick={() => {
                      setFormNumber(formNumber + 1);
                    }}
                  >
                    Guardar y continuar
                  </button>
                </div>
              </div>
            )}
            {formNumber === 3 && (
              <div className="w-full">
                <Form4 />
                <div className="p-4 sm:p-10 flex gap-10 justify-center items-center">
                  <span
                    className="text-[#35278C] font-semibold text-md sm:text-lg cursor-pointer"
                    onClick={() => {
                      setFormNumber(formNumber - 1);
                    }}
                  >
                    Cancelar
                  </span>
                  <button
                    className="bg-[#011B4E]  text-white font-semibold py-4 px-8 sm:px-16 rounded-full text-sm sm:text-lg"
                    onClick={() => {
                      navigate("/my-property/property-details");
                    }}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddPropertyData;
