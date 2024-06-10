import React, { useRef, useState } from "react";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import line from "../assets/line2.png";
import upload from "../assets/upload.png";
import remove from "../assets/delete.png";
import retry from "../assets/retry.png";
import star from "../assets/start.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShareGallery = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [videoURL, setVideoURL] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [embeddedURL, setEmbeddedURL] = useState("");
  const [videoURLs, setVideoURLs] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const fileNames = Array.from(files).map((file) => file.name);
    setUploadedImages((prevImages) => [...prevImages, ...fileNames]);
  };

  const handleInputChange = (event) => {
    const url = event.target.value;
    setVideoURL(url);
  };

  const handlePreview = () => {
    // Extract video ID from the URL
    const videoID = videoURL.split("v=")[1];

    // Validate the extracted video ID
    if (videoID) {
      // Construct the embedded URL
      const embeddedURL = `https://www.youtube.com/embed/${videoID}`;

      // Update showPreview state with the embedded URL
      setEmbeddedURL(embeddedURL);
      setShowPreview(true);
      setVideoURLs((prevURLs) => [...prevURLs, videoURL]);
      setVideoURL("");
    } else {
      toast.error("Invalid YouTube URL", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const handlePost = () => {
    const data = {
      images: uploadedImages,
      videos: videoURLs,
    };

    fetch("/api/property", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Property details saved successfully!", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        navigate("/my-property/property-details");
      })
      .catch((error) => {
        toast.error("Error saving property details", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };

  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };

  return (
    <div className="bg-[#EFF6FF]">
      <CustomHeader index={0} />
      <Link
        onClick={goBack}
        className="inline-flex justify-start text-[#011B4E] p-4 sm:p-8 gap-3"
      >
        <KeyboardBackspaceIcon />
        Atrás
      </Link>

      <div className="flex justify-center items-center">
        <span className="cursor-pointer font-bold text-md sm:text-lg text-white rounded-full bg-[#e5b219] p-2 h-8 text-center flex items-center border-4 border-[#fb9706] mr-[-0.2rem] z-10">
          1
        </span>
        <img src={line} className="h-2 w-20" />
        <span className="cursor-pointer font-bold text-md sm:text-lg text-white rounded-full bg-[#e5b219] p-2 h-8 text-center flex items-center border-4 border-[#fb9706] ml-[-0.2rem] z-10">
          2
        </span>
      </div>
      <div className="flex flex-col gap-5 justify-center p-6  w-[90%] sm:w-3/5 m-auto">
        <span className="text-center text-[#011B4E] text-xl sm:text-2xl font-bold  w-auto m-auto">
          Comparte fotos y videos de la propiedad
        </span>
        <span className="text-start text-[#011b4e] font-bold text-lg sm:text-xl">
          Fotos
        </span>
        <span className="text-[#6e6e70] font-semibold text-sm">
          Carga tus fotos. Una vez cargadas, arrastra y suelta para cambiarlas
          de orden. Se admiten los formatos jpg, jpeg y png desde 500 x 500px
          hasta 6000 x 6000px.
        </span>
        <div className="flex gap-3">
          <div
            className={`flex items-center justify-center border rounded-lg border-black bg-white border-dashed h-60 flex-col gap-4 cursor-pointer p-3 ${
              uploadedImages.length > 0
                ? "w-40 sm:w-60 text-center text-sm"
                : "w-full text-lg sm:text-xl"
            }`}
            onClick={() => fileInputRef.current.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              multiple
              onChange={handleFileUpload}
            />
            <img className="w-16" src={upload} alt="upload-icon" />
            <span className="text-[#FF9203] font-bold text-center">
              Agrega las fotos de la propiedad
            </span>
          </div>
          {uploadedImages.length > 0 && (
            <div
              className="w-40 sm:min-w-60 rounded-md relative bg-cover bg-center"
              style={{
                backgroundImage: `url(${URL.createObjectURL(
                  uploadedImages[uploadedImages.length - 1]
                )})`,
              }}
            >
              <div className="flex gap-2 absolute justify-between items-center bottom-0 p-2 text-white">
                <span className="text-sm font-bold">Foto principal</span>
                <img
                  src={star}
                  className="w-fit cursor-pointer"
                  alt="star-icon"
                />
                <img
                  src={remove}
                  className="w-fit cursor-pointer"
                  alt="remove-icon"
                />
                <img
                  src={retry}
                  className="w-fit cursor-pointer"
                  alt="retry-icon"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="my-12 flex flex-col gap-4  w-[90%] sm:w-3/5 m-auto p-6">
        <span className="text-xl sm:text-2xl text-[#011B4E] text-start font-bold ">
          Videos (Opcional)
        </span>
        <span className="text-[#6e6e70] text-sm font-semibold">
          Puedes enlazar hasta 10 vídeos de YouTube.
        </span>
        <div className="flex gap-3 items-center">
          <input
            className="border rounded-md p-3 text-[#6E6E70] text-xs border-[#8692A6] bg-[#EFF6FF] w-full font-semibold"
            placeholder="Pega la URL del video aquí"
            value={videoURL}
            onChange={handleInputChange}
          />
          <button
            className="border border-black p-2 px-5 h-fit bg-white rounded-md"
            onClick={handlePreview}
          >
            Agregar
          </button>
        </div>
        {showPreview && (
          <div className="flex flex-col gap-2 items-center">
            <iframe
              width=""
              height=""
              src={embeddedURL}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="rounded-xl w-[90%] h-40 xs:h-64"
              allowFullScreen
            ></iframe>
            <div className="flex justify-center gap-5 items-center my-3">
              <span className="text-[#35278c] text-sm font-bold cursor-pointer">
                Guardar como borrador
              </span>
              <button
                className="bg-[#011B4E]  text-white font-semibold py-3 px-5 sm:px-10 rounded-3xl text-xs sm:text-md"
                onClick={handlePost}
              >
                Publicar
              </button>
            </div>
            <div className="text-[#35278C] flex justify-center w-auto m-auto cursor-pointer font-semibold">
              Cancelar
            </div>
          </div>
        )}

        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default ShareGallery;
