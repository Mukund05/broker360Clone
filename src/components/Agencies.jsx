import React, { useEffect, useState } from "react";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import cross from "../assets/cross.png";
import list from "../assets/lust.png";
import agency1 from "../assets/agency1.png";
import agency2 from "../assets/agency2.png";
import crossed from "../assets/crossed.png";
import adduser from "../assets/adduser.png";
import negative from "../assets/negative.png";
import info from "../assets/info.png";
import SubjectIcon from "@mui/icons-material/Subject";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LanguageIcon from "@mui/icons-material/Language";
import CancelIcon from "@mui/icons-material/Cancel";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Api from "../Api";
import { useNavigate } from "react-router-dom";

const Agencies = () => {

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await Api.getUsers();
        // console.log(response);
        if (response.success) setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  const Modal = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-30 z-50 px-2">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center gap-y-4">
          <img src={info} className="flex" />
          <h2 className="text-lg font-bold mb-4 text-center">
            ¿Estás seguro que deseas dejar de colaborar?
          </h2>
          <div className="flex justify-center">
            <button
              className=" text-[#35278c] font-bold py-2 px-4 rounded mr-4"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button
              className="bg-[#011B4E]  text-white font-semibold py-2 px-6 sm:px-12 rounded-3xl text-xs sm:text-md"
              onClick={() => console.log("first")}
            >
              Si, dejar de colaborar
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-[#eff6ff]">
      <CustomHeader index={1} />
      <div className="p-6">
        <div className="flex justify-between  my-8">
          <div className="font-bold text-[#FF9203] text-lg sm:text-xl">
            1-18 de 150 inmobiliarias
          </div>
          <div className="flex gap-2 flex-wrap justify-end">
            <span className="bg-white p-2 items-center w-fit flex gap-3 rounded-md border-[#6E6E70] border text-sm cursor-pointer hover:bg-[#011B4E] hover:text-white">
              Cancún <img src={cross} className=" text-gray-500" />
            </span>
            <span className="bg-white p-2 items-center flex gap-3 rounded-md border-[#6E6E70] border text-sm cursor-pointer hover:bg-[#011B4E] hover:text-white">
              Ciudad <KeyboardArrowUpIcon className=" text-gray-500" />
            </span>
            <span className="bg-white p-2 items-center flex gap-3 rounded-md border-[#6E6E70] border text-sm cursor-pointer hover:bg-[#011B4E] hover:text-white">
              Cualquiera
            </span>
            <span className="bg-white p-2 items-center flex gap-3 rounded-md border-[#6E6E70] border text-sm cursor-pointer hover:bg-[#011B4E] hover:text-white">
              Mis colaboradores
            </span>
            <button className="rounded-xl py-3 sm:px-4 px-2 text-[#6E6E70] bg-[#ffffff] text-xs sm:text-sm flex justify-between items-center gap-3 ">
              <SubjectIcon className="flex justify-center w-4 items-center text-center " />
              <span className="flex justify-center items-center">Ordenar</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          {user &&
            user?.map((agent, index) => (
              <div className="bg-white p-2 flex flex-col gap-2 w-[95%] md:w-3/4 py-4 hover:cursor-pointer" key={agent.id} onClick={()=>navigate(`/agency/${agent.id}`)}>
                <div className="flex justify-between px-3">
                  <span className="text-[#002F6D] font-semibold text-xl ">
                    Soluciones inmobiliarias México
                  </span>
                  <span className="text-[#ff9203] font-semibold text-[16px] text-end">
                    205 anuncios
                  </span>
                </div>
                <div className="border-t border-t-[#6E6E70]"></div>
                <div className="flex justify-between gap-3 px-4 flex-col sm:flex-row">
                  <div className="w-1/5 h-fit justify-center flex items-center">
                    <img src={agent.profile_url ? `${import.meta.env.VITE_BASE_URL}${agent.profile_url}`:agency1} className="w-full h-fit mx-auto" />
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-2 w-1/3 h-fit">
                      <div className="flex gap-1 items-center">
                        <LocationOnIcon className="text-[#6E6E70]" />
                        <span className="text-[16px] font-semibold">
                          Dirección
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <PhoneIcon className="text-[#6E6E70]" />
                        <span className="text-[16px] font-semibold">
                          Teléfono oficina
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <PhoneIphoneIcon className="text-[#6E6E70]" />
                        <span className="text-[16px] font-semibold">
                          Teléfono móvil
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <EmailIcon className="text-[#6E6E70]" />
                        <span className="text-[16px] font-semibold">
                          Correo electrónico
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-1/3 items-end">
                      <div className="flex gap-1">
                        <span className="text-[16px] text-end">
                        {agent.address ? agent.address : 'N/A'}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <span className="text-[16px] ">{agent.office ? agent.office : 'N/A'}</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="text-[16px] ">{agent.number ? agent.number : 'N/A'}</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="text-[16px] ">{agent.email ? agent.email : 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row items-center gap-3 w-full">
                  <div className="w-1/5"></div>
                  <div className="w-1/2 flex gap-1 justify-center sm:justify-start">
                    <LanguageIcon className="text-[#0052bd]" />
                    <span className="text-[16px] font-semibold text-[#0052bd] underline">
                      SolucionesinmobiliariasMéxico.com
                    </span>
                  </div>
                  <div className="w-1/3 flex justify-center sm:justify-end">
                    <button className="p-2 border border-[#6e6e70] flex justify-between gap-3 items-center bg-white rounded-md h-fit w-fit ">
                      <CancelIcon className="text-[#6e6e70]" />
                      <span className="text-[#6e6e70]">
                        Cancelar invitación
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {/* <div className="bg-white p-2 flex flex-col gap-2 w-[95%] md:w-3/4 py-4">
            <div className="flex justify-between px-3">
              <span className="text-[#002F6D] font-semibold text-xl ">
                Soluciones inmobiliarias México
              </span>
              <span className="text-[#ff9203] font-semibold text-[16px] text-end">
                205 anuncios
              </span>
            </div>
            <div className="border-t border-t-[#6E6E70]"></div>
            <div className="flex justify-between gap-3 px-4 flex-col sm:flex-row">
              <div className="w-1/5 h-fit justify-center flex items-center">
                <img src={agency1} className="w-full h-fit mx-auto" />
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2 w-1/3 h-fit">
                  <div className="flex gap-1 items-center">
                    <LocationOnIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">Dirección</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <PhoneIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">
                      Teléfono oficina
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <PhoneIphoneIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">
                      Teléfono móvil
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <EmailIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">
                      Correo electrónico
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-1/3 items-end">
                  <div className="flex gap-1">
                    <span className="text-[16px] text-end">
                      Ciudad de México, Alvaro Obregón
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-[16px] ">5698789000</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-[16px] ">5698789000</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-[16px] ">simex@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-col sm:flex-row items-center gap-3 w-full">
              <div className="w-1/5"></div>
              <div className="w-1/2 flex gap-1 justify-center sm:justify-start">
                <LanguageIcon className="text-[#0052bd]" />
                <span className="text-[16px] font-semibold text-[#0052bd] underline">
                  SolucionesinmobiliariasMéxico.com
                </span>
              </div>
              <div className="w-1/3 flex justify-center sm:justify-end">
                <button className="p-2 border border-[#6e6e70] flex justify-between gap-3 items-center bg-white rounded-md h-fit w-fit ">
                  <CancelIcon className="text-[#6e6e70]" />
                  <span className="text-[#6e6e70]">Cancelar invitación</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-2 flex flex-col gap-2 w-[95%] md:w-3/4 py-4">
            <div className="flex justify-between px-3">
              <span className="text-[#002F6D] font-semibold text-xl ">
                Soluciones inmobiliarias México
              </span>
              <span className="text-[#ff9203] font-semibold text-[16px] text-end">
                205 anuncios
              </span>
            </div>
            <div className="border-t border-t-[#6E6E70]"></div>
            <div className="flex justify-between gap-3 px-4 flex-col sm:flex-row">
              <div className="w-1/5 h-fit justify-center flex items-center">
                <img src={agency2} className="w-full h-fit mx-auto" />
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2 w-1/3 h-fit">
                  <div className="flex gap-1 items-center">
                    <LocationOnIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">Dirección</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <PhoneIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">
                      Teléfono oficina
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <PhoneIphoneIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">
                      Teléfono móvil
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <EmailIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">
                      Correo electrónico
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-1/3 items-end">
                  <div className="flex gap-1">
                    <span className="text-[16px] text-end">
                      Ciudad de México, Alvaro Obregón
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-[16px] ">5698789000</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-[16px] ">5698789000</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-[16px] ">simex@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-col sm:flex-row items-center gap-3">
              <div className="w-1/5"></div>
              <div className="w-1/2 flex gap-1 justify-center sm:justify-start">
                <LanguageIcon className="text-[#0052bd]" />
                <span className="text-[16px] font-semibold text-[#0052bd] underline">
                  SolucionesinmobiliariasMéxico.com
                </span>
              </div>
              <div className="w-1/3 flex justify-center sm:justify-end">
                <button
                  className="p-3 flex justify-between gap-3 items-center  bg-[#052682] rounded-md h-fit w-fit "
                  onClick={() => setShowModal(true)}
                >
                  <PersonAddIcon className="text-white" />
                  <span className="text-[#ffffff]">Invitar a colaborar</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-2 flex flex-col gap-2 w-[95%] md:w-3/4 py-4">
            <div className="flex justify-between px-3">
              <span className="text-[#002F6D] font-semibold text-xl ">
                Soluciones inmobiliarias México
              </span>
              <span className="text-[#ff9203] font-semibold text-[16px] text-end">
                205 anuncios
              </span>
            </div>
            <div className="border-t border-t-[#6E6E70]"></div>
            <div className="flex justify-between gap-3 px-4 flex-col sm:flex-row">
              <div className="w-1/5 h-fit justify-center flex items-center">
                <img src={agency1} className="w-full h-fit mx-auto" />
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2 w-1/3 h-fit">
                  <div className="flex gap-1 items-center">
                    <LocationOnIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">Dirección</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <PhoneIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">
                      Teléfono oficina
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <PhoneIphoneIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">
                      Teléfono móvil
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <EmailIcon className="text-[#6E6E70]" />
                    <span className="text-[16px] font-semibold">
                      Correo electrónico
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-1/3 items-end">
                  <div className="flex gap-1">
                    <span className="text-[16px] text-end">
                      Ciudad de México, Alvaro Obregón
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-[16px] ">5698789000</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-[16px] ">5698789000</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-[16px] ">simex@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-col sm:flex-row items-center gap-3 w-full">
              <div className="w-1/5"></div>
              <div className="w-1/2 flex gap-1 justify-center sm:justify-start">
                <LanguageIcon className="text-[#0052bd]" />
                <span className="text-[16px] font-semibold text-[#0052bd] underline">
                  SolucionesinmobiliariasMéxico.com
                </span>
              </div>
              <div className="w-1/3 flex justify-center sm:justify-end">
                <button className="p-2 border border-[#6e6e70] flex justify-between gap-3 items-center bg-white rounded-md h-fit w-fit ">
                  <CancelIcon className="text-[#6e6e70]" />
                  <span className="text-[#6e6e70]">Cancelar invitación</span>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
      {showModal && <Modal />}
    </div>
  );
};

export default Agencies;
