import React from "react";
import SearchHeader from "../elements/SearchHeader";
import Footer from "../elements/Footer";
import hamburger from "../assets/hamburger.png";

const ProjectCreation = () => {
  return (
    <div>
      <SearchHeader />
      <div className="bg-[#eff6ff] p-12">
        <div className="bg-white shadow-xl relative w-5/6 pb-[50%]">
          <div className="bg-[#011B4E] text-white flex items-center justify-center text-lg sm:text-3xl font-bold py-20 flex-col">
            <img
              src={hamburger}
              className="absolute top-6 left-6 w-6 h-4 cursor-pointer"
            />
            <span className="mx-auto">Encabezado</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectCreation;
