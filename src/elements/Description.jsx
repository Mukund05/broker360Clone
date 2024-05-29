import React from "react";
import Card from "./Card";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

const Description = () => {
  return (
    <div className="relative flex flex-col gap-6 p-8 justify-center items-center">
      <span className="flex gap-4 xs:gap-7 sm:gap-6 items-center">
        <img src={img1} className="w-[30px] sm:w-[60px] h-fit" />
        <img src={img2} className="w-[30px] sm:w-[60px] h-fit" />
        <img src={img3} className="w-[30px] sm:w-[60px] h-fit" />
        <img src={img4} className="w-[30px] sm:w-[60px] h-fit" />
        <img src={img5} className="w-[30px] sm:w-[60px] h-fit" />
        <img src={img6} className="w-[30px] sm:w-[60px] h-fit" />
        <img src={img7} className="w-[30px] sm:w-[60px] h-fit" />
      </span>
      <h1 className="text-xl  sm:text-3xl text-[#ff9203] font-bold text-center px-8 sm:px-28">
        <span className="text-[#011B4E]"> Disfruta de tu propio</span> espacio
        exclusivo <span className="text-[#011B4E]">para</span> exhibir tus
        propiedades
      </h1>
      <div className="flex gap-x-3 flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <Card
            heading="Optimizado para móviles"
            para="Todos los sitios web se ajustan automáticamente al tamaño de tu celular, tablet o computadora."
          />
        </div>
        <div className="w-full md:w-1/3">
          <Card
            heading="Diseño profesional"
            para="Actualiza tu sitio y mira los cambios de inmediato. También todas tus propiedades se actualizarán y mostrarán automáticamente al momento de publicarlas."
          />
        </div>
        <div className="w-full md:w-1/3">
          <Card
            heading="Capta clientes potenciales"
            para="Todos los prospectos que lleguen de tu sitio web aparecerán en el CRM y se notificará a tu equipo para darle seguimiento."
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
