import React from "react";
import bin from "../assets/bin.png";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";

const MyWebsiteCard = ({ img, heading, content, btnText, route }) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 sm:p-6 flex flex-col justify-start gap-y-4 bg-white rounded-lg  min-w-[240px] w-3/4 sm:w-[30%]">
      <img src={img} />
      <h1 className="text-center sm:text-start text-md sm:text-lg font-bold text-[#011B4E]">
        {heading}
      </h1>
      <span className="text-[#6E6E70] font-sans">{content}</span>
      <div className="flex justify-between gap-x-4 text-center items-center box-border">
        <button
          className="bg-[#011B4E]  text-white font-semibold py-3 px-2 sm:px-8 rounded-3xl text-sm sm:text-md w-full"
          onClick={() => navigate(route)}
        >
          {btnText}
        </button>
        {btnText == "Editar sitio" ? (
          <DeleteOutlineIcon
            className="flex bg-[#d2d2d2] rounded-full p-3 text-[#011B4E] cursor-pointer"
            style={{ fontSize: "3rem" }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MyWebsiteCard;
