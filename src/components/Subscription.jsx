import React from "react";
import PaymentCard from "../elements/PaymentCard";
import Header from "../elements/Header";
import Footer from "../elements/Footer";

const Subscription = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-[#EFF6FF] flex flex-col gap-y-6 justify-center items-center py-8 sm:py-16 text-center ">
        <h1 className="text-[#011b4e] text-3xl sm:text-4xl font-bold py-6">
          Planes De Suscripción
        </h1>
        <div className="flex flex-col sm:flex-row gap-x-8 px-8 sm:px-6 md:px-10 gap-y-12 flex-wrap justify-around">
          <PaymentCard
            title={"Free"}
            price={"GRATIS"}
            route={"/payment-method"}
          />
          <PaymentCard
            title={"Plan 1"}
            price={"20 MXN/MES"}
            route={"/payment-method"}
          />
          <PaymentCard
            title={"Plan 2"}
            price={"40 MXN/MES"}
            route={"/payment-method"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscription;
