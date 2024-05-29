import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import React, { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import carousel from "../assets/carousel.png";
import play from "../assets/playbtn.png";

const ExpandableParagraph = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-4 p-6 shadow-xl rounded-lg bg-white">
      <div className="flex items-center">
        <h2 className="text-base  font-semibold text-[#011B4E]">{title}</h2>
        <button
          className={`ml-2 text-gray-500 transition-transform duration-300 transform `}
          onClick={toggleOpen}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <div className="bg-[#ff9023] p-2  text-white rounded">
              <HiOutlineMinus />{" "}
            </div>
          ) : (
            <div className="p-2  bg-gray-300 text-white rounded">
              <HiOutlinePlus />
            </div>
          )}
        </button>
      </div>
      <div
        className={`mt-2 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p className="text-[#6F6C90] font-semibold text-xs">{content}</p>
      </div>
    </div>
  );
};

const DropdownHelp = () => {
  const navigate = useNavigate();
  const slides = [carousel, carousel, carousel, carousel];
  const [counter, setCounter] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const handleSlideChange = (index) => {
    setSlideIndex(index);
    setCounter(index);
  };
  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };
  return (
    <div>
      <CustomHeader />
      <div className="bg-[#eff6ff]">
        <div className="flex justify-between items-center p-8 relative">
          <div className="absolute w-fit inline-flex">
            {" "}
            <Link
              onClick={goBack}
              className="inline-flex justify-start text-[#011B4E] p-0 gap-3"
            >
              <KeyboardBackspaceIcon />
              Atrás
            </Link>
          </div>
          <div className="w-full text-center text-[#002F6D] flex items-center justify-center text-xl sm:text-3xl font-bold">
            Ayuda
          </div>
        </div>

        {/* listing */}

        <div className="px-8 sm:p-8 ">
          <div className="flex flex-col sm:flex-row sm:gap-12 sm:px-12 justify-center">
            <div className="">
              <ExpandableParagraph
                title="Paragraph 1 jdhfusdhfusdyg  abfhb auas das uydgasudas gd"
                content="Content of paragraph 1 goes here. danbsvd ashd asdhas dgashd gasgdhgasdgasg dhasgdasdch hdygd"
              />
              <ExpandableParagraph
                title="Paragraph 1 jdhfusdhfusdyg  abfhb auas das uydgasudas gd"
                content="Content of paragraph 1 goes here. danbsvd ashd asdhas dgashd gasgdhgasdgasg dhasgdasdch hdygd"
              />
              <ExpandableParagraph
                title="Paragraph 1 jdhfusdhfusdyg  abfhb auas das uydgasudas gd"
                content="Content of paragraph 1 goes here. danbsvd ashd asdhas dgashd gasgdhgasdgasg dhasgdasdch hdygd"
              />
            </div>
            <div className="">
              <ExpandableParagraph
                title="Paragraph 1 jdhfusdhfusdyg  abfhb auas das uydgasudas gd"
                content="Content of paragraph 1 goes here. danbsvd ashd asdhas dgashd gasgdhgasdgasg dhasgdasdch hdygd"
              />
              <ExpandableParagraph
                title="Paragraph 1 jdhfusdhfusdyg  abfhb auas das uydgasudas gd"
                content="Content of paragraph 1 goes here. danbsvd ashd asdhas dgashd gasgdhgasdgasg dhasgdasdch hdygd"
              />
              <ExpandableParagraph
                title="Paragraph 1 jdhfusdhfusdyg  abfhb auas das uydgasudas gd"
                content="Content of paragraph 1 goes here. danbsvd ashd asdhas dgashd gasgdhgasdgasg dhasgdasdch hdygd"
              />
            </div>
          </div>
        </div>
        <span className="text-[#002f6d] font-bold text-xl sm:text-2xl text-center flex justify-center">
          Tutoriales
        </span>
        <div className="p-8  md:px-20 ">
          <div
            className="flex gap-x-2 overflow-hidden relative"
            style={{ overflowX: "hidden" }}
          >
            <div
              className="w-full flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${slideIndex * (100 / 1.33)}%) `, // Adjust 3 according to the number of images per slide
              }}
            >
              {[carousel, carousel, carousel, carousel, carousel].map(
                (image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`image-${index}`}
                    className="w-[250px] sm:w-[400px] md:w-[600px] px-2 sm:px-5 relative"
                  />
                )
              )}
            </div>
          </div>
          <div className="flex justify-center p-6 gap-3">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`cursor-pointer w-fit h-fit rounded-full flex justify-center items-center ${
                  index === counter
                    ? "bg-[#011B4E] p-[6px] px-4"
                    : "bg-[#D9D9D9] p-[6px] px-2"
                }`}
                onClick={() => handleSlideChange(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DropdownHelp;
