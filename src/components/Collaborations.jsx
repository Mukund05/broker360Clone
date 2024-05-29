import React from "react";
import CustomHeader from "../elements/CustomHeader";
import people from "../assets/people.png";
import arrow from "../assets/arrow.png";
import file from "../assets/file.png";
import Footer from "../elements/Footer";
import { Link, useNavigate } from "react-router-dom";

const Collaborations = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CustomHeader index={1} />
      <div className="flex flex-col gap-y-8 bg-[#eff6ff]">
        <div className="bg-white p-4 mx-12 my-4 rounded-xl">
          <div className="flex gap-x-3  text-[#011B4E] items-center rounded-xl p-4 ">
            <img src={people} className="w-8 h-4 flex items-center" />
            <span className="text-md  text-[#011B4E] font-bold sm:text-xl">
              Colaboraciones
            </span>
          </div>
          <span className=" font-semibold text-[#6E6E70] text-sm sm:text-md">
            Colabora con otras inmobiliarias o grupos para ayudar a promocionar
            sus propiedades en tu sitio web, así también ellos promocionarán las
            tuyas. Asegúrate de ponerte en contacto con ellos para acordar los
            términos de la colaboración. Para información,{" "}
            <Link className="underline ">
              visita nuestra guía de colaboraciones.
            </Link>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="bg-white p-4 sm:ml-12 sm:mr-4 mb-16 rounded-xl w-10/12 sm:w-1/2">
            <div className="border-b-[#D9D9D9] border-b-2 ">
              <div className="flex gap-x-4 text-[#FF9203] text-center items-center justify-center font-bold">
                <img src={arrow} />
                <div className="text-md sm:text-xl mb-3">
                  Invitaciones enviadas
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 text-[#6E6E70] text-md sm:text-lg py-4">
              <span className="font-bold text-xl sm:text-2xl">586</span>
              <span className="font-semibold">Inmobiliarias</span>
            </div>
            <div className="flex gap-x-4 text-[#6E6E70] text-md sm:text-lg py-4">
              <span className="font-bold text-xl sm:text-2xl">2598</span>
              <span className="font-semibold">
                propiedades de tus publicadores
              </span>
            </div>
          </div>
          <div className="bg-white p-4 sm:mr-12 sm:ml-4 mb-16 rounded-xl w-10/12 sm:w-1/2">
            <div className="border-b-[#D9D9D9] border-b-2 ">
              <div className="flex gap-x-4 text-[#FF9203] text-center items-center justify-center font-bold">
                <img src={file} />
                <div className="text-md sm:text-xl mb-3">
                  Invitaciones recibidas
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 text-[#6E6E70] text-md sm:text-lg py-4">
              <span className="font-bold text-xl sm:text-2xl">02</span>
              <span className="font-semibold">Inmobiliarias</span>
            </div>
            <div className="flex gap-x-4 text-[#6E6E70] text-md sm:text-lg py-4">
              <span className="font-bold text-xl sm:text-2xl">15</span>
              <span className="font-semibold">
                propiedades de tus publicadores
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collaborations;
