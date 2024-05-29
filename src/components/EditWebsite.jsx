import React from "react";
import CustomHeader from "../elements/CustomHeader";
import MyWebsiteCard from "../elements/MyWebsiteCard";
import one from "../assets/1e.png";
import two from "../assets/2e.png";
import three from "../assets/3e.png";
import CustomFooter from "../elements/CustomFooter";
import Footer from "../elements/Footer";

const EditWebsite = () => {
  return (
    <div>
      <CustomHeader index={2} />
      <div className="sm:px-12 md:px-24 py-8 flex flex-col gap-y-6 bg-[#eff6ff] justify-center text-center sm:text-start">
        <span className="text-[#011b4e] text-xl sm:text-2xl md:text-3xl font-bold px-2">
          Mi sitio web
        </span>
        <span className="text-[#6e6e70] font-sm sm:text px-2 font-semibold    ">
          Escoge una plantilla prediseñada para crear tu sitio web.
        </span>
        <div className="flex flex-col gap-y-6  sm:flex-row justify-around items-center flex-wrap gap-x-8">
          <MyWebsiteCard
            img={one}
            heading="Sitio web formal"
            content="Lorem ipsum dolor sit amet consectetur. Risus semper amet sed hac elementum. Et natoque id turpis placerat pellentesque pellentesque neque iaculis."
            btnText="Editar sitio"
          />
          <MyWebsiteCard
            img={two}
            heading="Sitio web amigable"
            content="Lorem ipsum dolor sit amet consectetur. Risus semper amet sed hac elementum. Et natoque id turpis placerat pellentesque pellentesque neque iaculis."
            btnText="Usar plantilla"
          />
          <MyWebsiteCard
            img={three}
            heading="Sitio web minimalista"
            content="Lorem ipsum dolor sit amet consectetur. Risus semper amet sed hac elementum. Et natoque id turpis placerat pellentesque pellentesque neque iaculis."
            btnText="Usar plantilla"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditWebsite;
