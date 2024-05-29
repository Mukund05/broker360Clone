import React from "react";
import Footer from "../elements/Footer";
import { Link, useNavigate } from "react-router-dom";
import CustomHeader from "../elements/CustomHeader";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import wallet2 from "../assets/wallet2.png";

const DropdownSettings = () => {
  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };
  const navigate = useNavigate();
  return (
    <div className="bg-[#eff6ff]">
      <CustomHeader />
      <div>
        <div className="flex justify-between items-start p-4 sm:p-8 md:p-12 relative ">
          <div className="absolute w-fit inline-flex top-4 sm:top-8">
            {" "}
            <Link
              onClick={goBack}
              className="inline-flex justify-start text-[#011B4E] p-0 gap-3"
            >
              <KeyboardBackspaceIcon />
              Atrás
            </Link>
          </div>
          <div className="w-[90%] flex flex-col justify-center  text-center rounded-2xl shadow-xl py-4 sm:py-6 px-5 sm:px-10 bg-white m-auto my-12 sm:my-8">
            <div className="border-b-[#D9D9D9] border-b pb-6 p-3 flex flex-col gap-y-3">
              <div className="flex justify-center sm:justify-start items-center text-center md:text-start gap-x-2 ">
                <img src={wallet2} className="h-6 w-6 " />
                <span className="text-[#011B4E] text-lg sm:text-2xl font-bold">
                  Configuraciones
                </span>
              </div>
              <div className="flex justify-center sm:justify-start  text-center md:text-start text-[#6E6E70] text-md sm:text-lg font-semibold">
                Configura tu cuenta, plan y pagos
              </div>
            </div>
            <div className="flex  justify-center items-center py-8 gap-6 ">
              <div className="flex flex-col gap-5 text-start ">
                <div className="flex flex-col lg:flex-row gap-4  justify-start">
                  <span className="text-[#011B4E] font-bold text-md sm:text-lg w-1/4 text-nowrap">
                    Próxima fecha de pago
                  </span>
                  <div className="flex items-center justify-between w-full flex-wrap gap-3">
                    {" "}
                    {/* Added justify-center */}
                    <span className="text-[#6E6E70] font-semibold text-md sm:text-lg lg:px-10 pr-6 w-fit">
                      20 de marzo de 2024 por $ 990.00 MXN
                    </span>
                    <button className="border border-[#6E6E70] rounded-md text-[#6E6E70] text-nowrap px-2 py-1 hover:bg-[#011B4E] hover:text-white h-fit  w-fit">
                      Pagar ahora
                    </button>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4  justify-start">
                  <span className="w-2/6 text-[#011B4E] font-bold text-md sm:text-lg text-nowrap">
                    Plan
                  </span>
                  <div className="flex items-center justify-between w-full flex-wrap gap-3">
                    <span className="text-[#6E6E70]  font-semibold text-md sm:text-lg lg:px-10 pr-6 w-fit">
                      Inmobiliario-Sitio Web con 1 usuario
                    </span>
                    <button
                      className="border border-[#6E6E70] rounded-md text-[#6E6E70] text-nowrap px-2 py-1 hover:bg-[#011B4E] hover:text-white h-fit w-fit"
                      onClick={() =>
                        navigate("/change-plan/cancel-subscription")
                      }
                    >
                      Editar
                    </button>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4  justify-start">
                  <span className="w-2/6 text-[#011B4E] font-bold text-md sm:text-lg text-nowrap  md:text-wrap">
                    Método y frecuencia de pago
                  </span>
                  <div className="flex items-center justify-between w-full gap-3 flex-wrap">
                    <span className="text-[#6E6E70]  font-semibold text-md sm:text-lg lg:px-10 pr-6 w-fit">
                      Tarjeta domiciliada Mastercard ***44887 Cada mes
                    </span>
                    <button
                      className="border border-[#6E6E70] rounded-md text-[#6E6E70] text-nowrap px-2 py-1 hover:bg-[#011B4E] hover:text-white h-fit w-fit"
                      onClick={() => navigate("/payment-method-and-frequency")}
                    >
                      Editar
                    </button>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4  justify-start">
                  <span className="w-2/6 text-[#011B4E] font-bold text-md sm:text-lg text-nowrap">
                    Datos de facturación
                  </span>
                  <div className="flex items-center justify-between w-full gap-3 flex-wrap">
                    <span className="text-[#6E6E70]  font-semibold text-md sm:text-lg lg:px-10 pr-6 w-fit">
                      Inmobiliaria egypt-inmobiliariaegypt.com
                    </span>
                    <button className="border border-[#6E6E70] rounded-md text-[#6E6E70] text-nowrap px-2 py-1 hover:bg-[#011B4E] hover:text-white h-fit w-fit">
                      Editar
                    </button>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4  justify-start ">
                  <span className="w-2/6 text-[#011B4E] font-bold text-md sm:text-lg text-nowrap md:text-wrap">
                    Último pago
                  </span>
                  <div className="flex items-center justify-between w-full gap-3 flex-wrap">
                    <span className="text-[#6E6E70]  font-semibold text-md sm:text-lg lg:px-10 pr-6 w-fit">
                      El 20/02/2024 por $490.00 mxn
                    </span>
                    <button className="border border-[#6E6E70] rounded-md text-[#6E6E70] text-nowrap px-2 py-1 hover:bg-[#011B4E] hover:text-white h-fit w-fit">
                      Ver recibos
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-[#FF3D00] font-semibold cursor-pointer underline text-md sm:text-lg mb-6">
              Cancelar suscripción
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DropdownSettings;
