import React, { useState } from "react";
import Footer from "../elements/Footer";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CustomHeader from "../elements/CustomHeader";
import wallet from "../assets/wallet.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "../Api";


const PaymentFreq = () => {
  const navigate = useNavigate();
  const [up, setup] = useState(false);

  // State for form inputs
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [frequency, setFrequency] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  // Validation state
  const [errors, setErrors] = useState({});

  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };

  const iconTile = () => {
    setup(!up);
  };

  const validateInputs = () => {
    const errors = {};

    if (!number || number.length !== 16) {
      errors.number = "Card number must be 16 digits";
    }
    if (!expiry || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      errors.expiry = "Expiry date must be in MM/YY format";
    }
    if (!cvv || cvv.length !== 3) {
      errors.cvv = "CVV must be 3 digits";
    }
    if (!frequency) {
      errors.frequency = "Frequency cannot be empty";
    }
    if (!cardHolder) {
      errors.cardHolder = "Card holder name cannot be empty";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) {
      return;
    }

    const data = {
      number,
      expiry,
      cvv,
      frequency,
      name:cardHolder,
    };

    try {
      const response = await Api.saveCard(data);
      if (response.success) {
        toast.success("Payment method updated successfully");
        navigate("/configurations");
      } else {
        toast.error("Failed to update payment method");
      }
    } catch (error) {
      console.error("Error updating payment method:", error);
      toast.error("Error updating payment method");
    }
  };

  return (
    <div>
      <CustomHeader />
      <div className="bg-[#eff6ff]">
        <div className="flex justify-between items-start p-8 relative">
          <div className="absolute w-fit inline-flex">
            <Link
              onClick={goBack}
              className="inline-flex justify-start text-[#011B4E] p-0 gap-3"
            >
              <KeyboardBackspaceIcon />
              Atrás
            </Link>
          </div>
          <div className="w-full sm:w-3/4 flex flex-col justify-center  text-center rounded-2xl shadow-xl py-6 px-0 sm:px-10 bg-white m-auto my-12 sm:my-8">
            <div className="border-b-[#D9D9D9] border-b pb-6 p-3 flex flex-col gap-y-3">
              <div className="flex justify-center sm:justify-start items-center text-center md:text-start gap-x-2 ">
                <img src={wallet} className="h-6 w-6 " />
                <span className="text-[#011B4E] text-lg sm:text-2xl font-bold">
                  Método y frecuencia de pago
                </span>
              </div>
              <div className="justify-center sm:justify-start text-center md:text-start text-[#6E6E70] text-md sm:text-lg font-semibold">
                Revisa los detalles de tu método de pago y su frecuencia
              </div>
            </div>
            <div className="flex flex-col justify-center items-center py-8 gap-y-6">
              <div className="bg-[#FF9203] text-[#011B4E] w-2/3 p-2 font-semibold text-md sm:text-lg rounded-md">
                Tarjeta de débito/Crédito
              </div>
              <div className="w-2/3">
                <input
                  placeholder="555 996 5698745"
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="text-[#6E6E70] text-md sm:text-lg border border-[#8692A6] p-1 rounded-md text-start w-full font-semibold"
                />
                {errors.number && <div className="text-red-500">{errors.number}</div>}
              </div>
              <div className="w-2/3">
                <input
                  placeholder="Luisa Martinez"
                  type="text"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  className="text-[#6E6E70] text-md sm:text-lg border border-[#8692A6] p-1 rounded-md text-start w-full font-semibold"
                />
                {errors.cardHolder && <div className="text-red-500">{errors.cardHolder}</div>}
              </div>
              <div className="w-2/3 flex gap-x-3 justify-between">
                <input
                  placeholder="12/25"
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="text-[#6E6E70] text-md sm:text-lg border border-[#8692A6] p-1 rounded-md text-start w-full font-semibold"
                />
                <input
                  placeholder="123"
                  type="number"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="text-[#6E6E70] text-md sm:text-lg border border-[#8692A6] p-1 rounded-md text-start w-full font-semibold"
                />
              </div>
              {errors.expiry && <div className="text-red-500">{errors.expiry}</div>}
              {errors.cvv && <div className="text-red-500">{errors.cvv}</div>}
              <div className="w-2/3 flex flex-col sm:flex-row gap-y-4 gap-x-5 justify-between items-center">
                <div className="text-[#686868] text-nowrap font-semibold">
                  Frecuencia de pago
                </div>
                <div className="flex justify-between border border-[#8692A6] rounded-md px-2 w-full">
                  <input
                    placeholder="1 cuota"
                    type="text"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="text-[#6E6E70] text-md sm:text-lg p-1 text-start w-full font-semibold"
                  />
                  <div className="p-1" onClick={iconTile}>
                    {up ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </div>
                </div>
                {errors.frequency && <div className="text-red-500">{errors.frequency}</div>}
              </div>
              <div className="flex justify-around gap-x-6 items-center">
                <span className="cursor-pointer text-[#35278C] font-semibold">
                  Cancelar
                </span>
                <button
                  className="bg-[#011B4E] text-white font-semibold py-3 px-4 sm:px-8 rounded-3xl text-xs sm:text-md"
                  onClick={handleSubmit}
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default PaymentFreq;
