import React, { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi"; // Assuming you're using React Icons library

const ExpandableParagraph = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-4 p-6 shadow-xl rounded-lg ">
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

const Listing = () => {
  return (
    <div className="p-8 sm:p-12 mt-[-14rem] sm:mt-[-6rem] md:mt-4 lg:mt-24">
      <h1 className="text-2xl sm:text-4xl text-[#002F6D] font-bold text-center">
        Preguntas frecuentes
      </h1>

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

      {/* <ExpandableParagraph
        title="Paragraph 1 jdhfusdhfusdyg  abfhb auas das uydgasudas gd"
        content="Content of paragraph 1 goes here. danbsvd ashd asdhas dgashd gasgdhgasdgasg dhasgdasdch hdygd"
      />
      <ExpandableParagraph
        title="Paragraph 1 jdhfusdhfusdyg  abfhb auas das uydgasudas gd"
        content="Content of paragraph 1 goes here. danbsvd ashd asdhas dgashd gasgdhgasdgasg dhasgdasdch hdygd"
      /> */}
    </div>
  );
};

export default Listing;
