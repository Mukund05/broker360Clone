import React, { useEffect, useState } from "react";
import CustomHeader from "../elements/CustomHeader";
import clock from "../assets/clockgray.png";
import archive from "../assets/archive.png";
import dustbin from "../assets/dustbin.png";
import closemessage from "../assets/closemessage.png";
import message from "../assets/message.png";
import avatar from "../assets/avatar.png";
import forward from "../assets/forward.png";
import cancel from "../assets/cancel.png";
import previous from "../assets/previous.png";
import next from "../assets/next.png";
import minimise from "../assets/minimise.png";
import maximise from "../assets/maximise.png";
import remove from "../assets/remove.png";
import a from "../assets/a.png";
import link from "../assets/link.png";
import emoji from "../assets/emoji.png";
import dots from "../assets/3dots.png";
import garbage from "../assets/garbage.png";
import AddIcon from "@mui/icons-material/Add";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "../Api";

const Modal = ({ to, setTo, subject, setSubject, messageContent, setMessageContent, openChat, handleSendMail }) => {
  return (
    <div className="fixed bottom-0 right-8 w-4/5 md:w-2/5 h-[65%] md:h-[62%] flex justify-start items-start z-50 bg-white">
      <div className="flex flex-col w-full h-full">
        <div className="bg-[#011B4E] flex justify-between p-2 px-4 rounded-t-lg">
          <span className="text-white text-sm sm:text-lg font-semibold">
            Nuevo mensaje
          </span>
          <div className="flex gap-3 items-center">
            <img
              src={minimise}
              className="h-fit w-fit cursor-pointer"
              onClick={openChat}
            />
            <img
              src={maximise}
              className="h-fit w-fit cursor-pointer"
              onClick={openChat}
            />
            <img
              src={remove}
              className="h-fit w-fit cursor-pointer"
              onClick={openChat}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Para"
            className="w-full border border-gray-300 rounded-md px-2 py-1"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Asunto"
            className="w-full border border-gray-300 rounded-md px-2 py-1"
          />
          <textarea
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            placeholder="Escribir mensaje"
            className="w-full border border-gray-300 rounded-md px-2 py-1 h-40"
          />
        </div>
        <div className="flex justify-between p-4 border-t border-[#6E6E70]">
          <div className="flex gap-2 sm:gap-8 items-center">
            <button
              className="bg-[#011B4E] text-white font-semibold py-3 px-3 sm:px-6 rounded-3xl text-xs sm:text-md"
              onClick={handleSendMail}
            >
              Enviar mensaje
            </button>
            <div className="flex gap-4 items-center">
              <img src={a} className="h-fit w-fit cursor-pointer" />
              <img src={link} className="h-fit w-fit cursor-pointer" />
              <img src={emoji} className="h-fit w-fit cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img src={dots} className="h-fit w-fit cursor-pointer" />
            <img src={garbage} className="h-fit w-fit cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MessageGateway = () => {
  // State to manage hover for each item
  const [hoveredItem, setHoveredItem] = useState(null);
  const [modal, setModal] = useState(false);
  const [chatModal, setChatModal] = useState(false);
  const [active, setActive] = useState(false);

  // State for mail form inputs
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const notify = () =>
    toast.success(
      <div>
        <h4 className="text-green-500">El mensaje fue enviado exitosamente</h4>
      </div>
    );

  // Function to handle hover for a specific item
  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = () => {
    setModal(!modal);
  };

  const openChat = () => {
    setActive(!active);
    setChatModal(!chatModal);
  };

  const handleSendMail = async () => {
    const mailData = {
      to,
      subject,
      message: messageContent,
    };

    try {
      const response = await Api.sendMail(mailData);

      if (response.success) {
        notify();
        setActive(false);
        setChatModal(false);
        setTo("");
        setSubject("");
        setMessageContent("");
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending mail:", error);
      toast.error("Error sending message");
    }
  };
  

  return (
    <div className="bg-[#eff6ff]">
      <CustomHeader index={3} />
      <div className="p-6">
        <div className="flex justify-start gap-4 flex-wrap text-[#6E6E70] sm:gap-8 ">
          <span
            className={`${
              active ? "bg-[#052682] text-white" : "bg-white text-[#6E6E70]"
            } p-2 px-4 items-center w-fit flex gap-3 rounded-md border-[#6E6E70] border text-sm sm:text-lg cursor-pointer font-semibold hover:bg-[#052682] hover:text-white`}
            onClick={openChat}
          >
            <AddIcon className="text-gray-500" /> Redactar
          </span>
          <span className="bg-white p-2 px-4 items-center flex gap-3 rounded-md border-[#6E6E70] border text-sm sm:text-lg cursor-pointer font-semibold text-[#6E6E70] hover:bg-[#052682] hover:text-white">
            Activas
          </span>
          <span className="bg-white p-2 px-4 items-center flex gap-3 rounded-md border-[#6E6E70] border text-sm sm:text-lg cursor-pointer font-semibold text-[#6E6E70] hover:bg-[#052682] hover:text-white">
            Archivadas
          </span>
        </div>
        <ToastContainer />
        <div className="flex flex-col lg:flex-row justify-center gap-8 my-10">
          <div className="bg-white rounded-xl p-3 sm:p-4 w-fit lg:w-1/4 h-fit">
            <div className="rounded-full flex justify-between bg-[#E5B219] p-2 px-3 sm:p-4 sm:px-6 font-semibold text-white text-sm sm:text-lg">
              <span className="">Buzón de entrada</span>
              <span className="">15</span>
            </div>
          </div>
          <div className="flex flex-col bg-white w-full lg:w-4/5 text-sm shadow-sm">
            {modal ? (
              <div className="flex flex-col mb-56">
                <div className="border-b border-[#EDEFF1] flex justify-between items-center">
                  <KeyboardBackspaceIcon
                    className="m-5 cursor-pointer"
                    onClick={handleClick}
                  />
                  <div className="flex gap-5 m-5">
                    <span className="text-[#969696] text-sm font-semibold">
                      1–15 de 15
                    </span>
                    <div className="flex gap-4 items-center">
                      <img src={previous} className="h-fit cursor-pointer" />
                      <img src={next} className="h-fit cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 p-5 items-center">
                  <img
                    className="flex justify-center items-center h-fit"
                    src={avatar}
                  />
                  <div className="flex flex-col gap-10 justify-between ">
                    <div className="flex gap-4 items-center">
                      <div className="flex justify-between">
                        <span className="text-[#011b4e] font-bold text-lg sm:text-xl">
                          Contacto por propiedad
                        </span>
                      </div>
                      <img src={forward} className="w-4 h-fit" />
                      <span className="p-1 rounded-md bg-[#F2F2F2] flex items-center gap-3 cursor-pointer">
                        Buzón de entrada <img src={cancel} className="h-fit" />
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-[#011b4e] font-bold text-sm sm:text-lg">
                        Inmobiliaria Mex
                      </div>
                      <span className="text-[#969696] text-sm font-semibold">
                        9:14 AM (8 hours ago)
                      </span>
                    </div>
                    <div className="text-start text-xs sm:text-sm">
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                      et. Sunt qui esse pariatur duis deserunt mollit dolore
                      cillum minim tempor enim. Elit aute irure tempor cupidatat
                      incididunt sint deserunt ut voluptate aute id deserunt
                      nisi.
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              [...Array(11)].map((_, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                >
                  <div
                    className={`flex justify-between p-4 cursor-pointer hover:bg-[#D9D9D9] border border-[#D9D9D9] ${
                      hoveredItem === index ? "bg-[#D9D9D9]" : ""
                    }`}
                  >
                    <div className="flex gap-2 justify-between w-full sm:w-3/5 text-[#6E6E70]">
                      <input className="bg-[#D9D9D9]" type="checkbox" />
                      <span className="font-semibold text-xs xs:text-sm">
                        Inmobiliaria Mex
                      </span>
                      <span className="font-semibold text-xs xs:text-sm">
                        Interesado en la propiedad publicada
                      </span>
                    </div>
                    <div className="hidden sm:flex justify-end w-2/5 text-black font-bold">
                      {index === hoveredItem ? null : <span>Aug 15</span>}
                      <div
                        className={`flex gap-2 items-center ${
                          hoveredItem === index ? "block" : "hidden"
                        }`}
                      >
                        <img src={archive} className="text-[#707070] w-4 h-4" />
                        <img src={dustbin} className="text-[#707070] w-4 h-4" />
                        <img
                          src={closemessage}
                          className="text-[#707070] w-4 h-4"
                        />
                        <img src={message} className="text-[#707070] w-4 h-4" />
                        <img
                          src={clock}
                          className="text-[#707070] w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {chatModal && (
        <Modal
          to={to}
          setTo={setTo}
          subject={subject}
          setSubject={setSubject}
          messageContent={messageContent}
          setMessageContent={setMessageContent}
          openChat={openChat}
          handleSendMail={handleSendMail}
        />
      )}
    </div>
  );
};

export default MessageGateway;
