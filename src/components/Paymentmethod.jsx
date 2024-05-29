import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import Header from "../elements/Header";
import Footer from "../elements/Footer";

const Paymentmethod = () => {
  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };
  const handlePayment = () => {
    notify();
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };
  const navigate = useNavigate();
  const notify = () =>
    toast.success(
      <div className="">
        <h4 className="text-green-500 ">
          Tu pago se ha realizado exitosamente
        </h4>
        <p className="">Te llegará un correo con el comprobante de pago</p>
      </div>
    );
  return (
    <div className="">
      <Header />
      <div className="bg-[#eff6ff] p-4 ">
        <ToastContainer />

        <Link
          onClick={goBack}
          className="flex justify-start text-[#011B4E] p-4 sm:p-8 gap-3"
        >
          <KeyboardBackspaceIcon />
          Atrás
        </Link>

        <div className="rounded-xl shadow-lg flex justify-between w-[80%] sm:w-3/5 bg-white px-5 py-3 items-center m-auto">
          <span className="font-bold text-lg sm:text-2xl text-[#011B4E] ">
            Plan 1
          </span>
          <span className="font-bold text-xl sm:text-3xl text-[#ff9203]">
            20 MXN
          </span>
        </div>

        <div className="w-4/5 sm:w-2/5 flex flex-col gap-y-6 justify-center  m-auto my-8">
          <h1 className="text-[#011B4E] text-2xl sm:text-4xl font-bold w-auto m-auto">
            Método de pago
          </h1>
          <div className="bg-[#ff9203] p-3 rounded-xl w-full font-semibold flex justify-center text-sm sm:text-xl">
            Tarjeta de débito/Crédito
          </div>
          <input
            type="number"
            placeholder="Número de Tarjeta de débito/crédito"
            className="p-3 w-full rounded-lg text-[#011b4e] border border-[#011b4e] font-semibold"
          />
          <input
            type="number"
            placeholder="Nombre del titular de la tarjeta"
            className="p-3 w-full rounded-lg text-[#011b4e] border border-[#011b4e] font-semibold"
          />
          <div className="flex gap-x-4 justify-between">
            <input
              type="number"
              placeholder="Fecha de vencimiento (MM/AA)"
              className="p-3 w-full rounded-lg text-[#011b4e] border border-[#011b4e] font-semibold"
            />{" "}
            <input
              type="number"
              placeholder="Código de seguridad  (CVC)"
              className="p-3 w-full rounded-lg text-[#011b4e] border border-[#011b4e] font-semibold"
            />
          </div>
          <button
            className="bg-[#002F6D]  text-white font-semibold py-3 px-6 sm:px-12 rounded-3xl text-lg sm:text-xl w-full my-3"
            onClick={handlePayment}
          >
            Pagar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Paymentmethod;
