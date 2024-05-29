import React, { useState } from "react";
import Footer from "../elements/Footer";
import CustomHeader from "../elements/CustomHeader";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import PaymentCard from "../elements/PaymentCard";
import info from "../assets/info.png";

const CancelSubscription = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const Modal = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-30 z-50 px-2">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center gap-y-4">
          <img src={info} className="flex" />
          <h2 className="text-lg font-bold mb-4 text-center">
            ¿Estas seguro que deseas darte de baja?
          </h2>
          <div className="flex justify-center">
            <button
              className=" text-[#35278c] font-bold py-2 px-4 rounded mr-4"
              onClick={() => setShowModal(false)}
            >
              No, quiero
            </button>
            <button
              className="bg-[#011B4E]  text-white font-semibold py-2 px-6 sm:px-12 rounded-3xl text-xs sm:text-md"
              onClick={() => navigate("/configurations")}
            >
              Si, quiero
            </button>
          </div>
        </div>
      </div>
    );
  };

  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };
  return (
    <div>
      <CustomHeader />
      <div className="bg-[#eff6ff]">
        <div className="flex justify-between items-start p-8 relative">
          <div className="absolute w-fit inline-flex">
            <Link
              onClick={goBack}
              className="inline-flex justify-start text-[#011B4E] p-0 gap-3 font-bold"
            >
              <KeyboardBackspaceIcon />
              Atrás
            </Link>
          </div>
          <div className="w-full sm:w-3/4 flex  justify-between rounded-2xl shadow-xl py-3 sm:py-6 px-5 sm:px-10 bg-white m-auto my-12 sm:my-8 flex-col sm:flex-row gap-4">
            <div className="flex justify-start flex-col gap-4">
              <span className="text-[#6e6e70] text-lg font-semibold mb-2">
                Plan actual
              </span>
              <span className="text-[#011b4e] text-lg sm:text-xl font-bold ">
                Plan 2
              </span>
              <div className="flex gap-8">
                <span className="text-[#011b4e] text-lg sm:text-xl font-bold ">
                  Usuario
                </span>
                <span className="text-[#0052bd] text-lg sm:text-xl font-bold ">
                  1 persona
                </span>
              </div>
              <div className="flex gap-4 md:gap-8 items-start justify-start  flex-col md:flex-row">
                <span className="text-[#011b4e] text-lg sm:text-xl font-bold ">
                  Sitio web
                </span>
                <div className="flex gap-5">
                  <button className=" border border-[#454545] rounded-lg  p-2 px-4 bg-[#052682] text-white">
                    Sin sitio web
                  </button>
                  <button className="text-[#454545] border border-[#454545] rounded-lg  p-2 px-4 hover:bg-[#052682] hover:text-white">
                    Con sitio web
                  </button>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-[#011b4e] text-lg sm:text-xl font-bold ">
                  Método de Pago
                </span>
                <span className="text-[#0052bd] text-lg sm:text-xl font-bold ">
                  Tarjeta débito/crédito
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <span className="text-2xl sm:text-3xl font-bold text-[#ff9203]">
                  32 MXN
                </span>
                <span className="rounded-md bg-[#dbf3e5] text-[#219653] px-3 py-1 flex justify-center font-bold text-sm sm:text-lg w-fit sm:w-full">
                  Activo
                </span>
              </div>

              <span
                className="cursor-pointer underline text-sm sm:text-lg text-[#6e6e70] font-bold my-3 text-end"
                onClick={() => setShowModal(true)}
              >
                Darme de baja
              </span>
            </div>
          </div>
        </div>
        <span className="underline text-lg sm:text-xl text-[#6e6e70] font-bold flex justify-center items-center cursor-pointer mb-10">
          Cambiar de plan
        </span>
        <div className="flex w-fit m-auto mb-12">
          <PaymentCard title={"Free"} price={"GRATIS"} route={""} />
        </div>
        {showModal && <Modal />}
        <Footer />
      </div>
    </div>
  );
};

export default CancelSubscription;
