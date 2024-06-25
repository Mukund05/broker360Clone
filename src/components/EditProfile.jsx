import React, { useEffect, useState } from "react";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import camera from "../assets/camera.png";
import profilePlaceholder from "../assets/profile.png";
import google from "../assets/googleIcon.png";
import CircularProgress from "@mui/material/CircularProgress";
import Api from "../Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../Auth/AuthProvider";

const EditProfile = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // This will take you back to the previous page/component
  };
  const { updateUser } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profileImage, setProfileImage] = useState(""); // Placeholder for profile image
  const [pickedProfileImage, setPickedProfileImage] = useState(""); // Placeholder for profile image

  const [formData, setFormData] = useState({
    id: "",
    Firstname: "",
    Lastname: "",
    email: "",
    emails: "",
    number: "",
    agency_name: "",
    lang: "",
    timezone: "",
    profile_url: null,
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await Api.getProfile();
        const profileData = response?.data;
        setData(profileData);
        setFormData({
          id: profileData?.id || "",
          Firstname: profileData?.name.split(" ")[0] || "",
          Lastname: profileData?.name.split(" ")[1] || "",
          email: profileData?.email || "",
          emails: profileData?.emails || "",
          number: profileData?.number || "",
          agency_name: profileData?.agency_name || "",
          lang: profileData?.lang || "",
          timezone: profileData?.timezone || "",
          profile_url: profileData?.profile_url || null,
        });
        if (profileData?.profile_url) {
          setProfileImage(profileData.profile_url);
        }
      } catch (error) {
        console.error(
          "Failed to fetch profile. ",
          error.response?.data?.message
        );
        setError(
          error?.response?.data?.message ||
            "Failed to fetch profile. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPickedProfileImage(reader.result);
        setFormData((prev) => ({ ...prev, profile_url: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.Firstname) errors.Firstname = "First name is required.";
    if (!formData.Lastname) errors.Lastname = "Last name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.number) errors.number = "Number is required.";
    if (!formData.agency_name) errors.agency_name = "Agency name is required.";
    if (!formData.lang) errors.lang = "Language is required.";
    if (!formData.timezone) errors.timezone = "Timezone is required.";
    if (!formData.emails) errors.emails = "Email signature is required.";
    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const updateData = new FormData();
      updateData.append("id", formData.id);
      updateData.append("name", `${formData.Firstname} ${formData.Lastname}`);
      updateData.append("email", formData.email);
      updateData.append("number", formData.number);
      updateData.append("agency_name", formData.agency_name);
      updateData.append("lang", formData.lang);
      updateData.append("timezone", formData.timezone);
      updateData.append("emails", formData.emails);

      if (formData.profile_url) {
        updateData.append("profile_url", formData.profile_url);
      }

      const response = await Api.updateProfile(updateData, formData.id);
      if (response.success) {
        toast("Profile Updated Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        updateUser(response?.data);
        navigate("/Edit-profile");
      }
    } catch (error) {
      console.error("Failed to update profile. ", error);
      setError(
        error?.response?.data?.message ||
          "Failed to update profile. Please try again."
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-500">
        <p>{error}</p>
        <button onClick={goBack} className="text-blue-500 underline mt-4">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <CustomHeader />
      <div className="bg-[#eff6ff] px-4 flex flex-col md:relative">
        <Link
          onClick={goBack}
          className="md:absolute inline-flex justify-start text-[#011B4E] my-4 mx-4"
        >
          <KeyboardBackspaceIcon />
          Atrás
        </Link>

        <div className="w-full md:w-[90%] m-auto flex sm:px-0 flex-col items-center text-center gap-y-4 justify-between">
          <div className="p-4 py-8 sm:p-12 rounded-xl shadow-2xl flex flex-col gap-y-6 bg-white items-center justify-center w-[95%] sm:w-[85%] my-4 md:my-12">
            <span className="text-xl sm:text-3xl text-[#002F6D] font-bold">
              Editar mi perfil
            </span>
            <div className="relative">
              <label htmlFor="profileImageInput" className="cursor-pointer">
                {pickedProfileImage ? (
                  <img
                    src={`${pickedProfileImage || "dummy.jpg"}`}
                    alt="Profile"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${
                      profileImage || "dummy.jpg"
                    }`}
                    alt="Profile"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                )}
                <img
                  src={camera}
                  alt="Camera"
                  className="absolute top-14 left-14 h-6 w-6"
                />
              </label>
              <input
                type="file"
                id="profileImageInput"
                name="profile_url"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
            <div className="flex gap-y-4 flex-col text-[#686868] text-sm sm:text-md w-full">
              <div className="flex justify-center items-center mx-4 sm:mx-12">
                <label className="w-28 flex justify-end">Nombre</label>
                <div className="flex flex-col w-full">
                  <input
                    className="border p-2 rounded-md border-[#8692A6] w-full ml-2"
                    placeholder="Escribe tu nombre"
                    name="Firstname"
                    value={formData.Firstname}
                    onChange={handleChange}
                  />
                  {formErrors.Firstname && (
                    <span className="text-red-500 text-xs ml-2">
                      {formErrors.Firstname}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12">
                <label className="w-28 flex justify-end">Apellido</label>
                <div className="flex flex-col w-full">
                  <input
                    className="border p-2 rounded-md border-[#8692A6] w-full ml-2"
                    placeholder="Escribe tu apellido"
                    name="Lastname"
                    value={formData.Lastname}
                    onChange={handleChange}
                  />
                  {formErrors.Lastname && (
                    <span className="text-red-500 text-xs ml-2">
                      {formErrors.Lastname}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12">
                <label className="w-28 flex justify-end">Email</label>
                <div className="flex flex-col w-full">
                  <input
                    className="border p-2 rounded-md border-[#8692A6] w-full ml-2"
                    placeholder="Escribe tu email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <span className="text-red-500 text-xs ml-2">
                      {formErrors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12">
                <label className="w-28 flex justify-end">Inmobiliaria</label>
                <div className="flex flex-col w-full">
                  <input
                    className="border p-2 rounded-md border-[#8692A6] w-full ml-2"
                    placeholder="Escribe el nombre de tu inmobiliaria"
                    name="agency_name"
                    value={formData.agency_name}
                    onChange={handleChange}
                  />
                  {formErrors.agency_name && (
                    <span className="text-red-500 text-xs ml-2">
                      {formErrors.agency_name}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12">
                <label className="w-28 flex justify-end">Teléfono</label>
                <div className="flex flex-col w-full">
                  <input
                    className="border p-2 rounded-md border-[#8692A6] w-full ml-2"
                    placeholder="Escribe tu número"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                  {formErrors.number && (
                    <span className="text-red-500 text-xs ml-2">
                      {formErrors.number}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12">
                <label className="w-28 flex justify-end">Idioma</label>
                <div className="flex flex-col w-full">
                  <input
                    className="border p-2 rounded-md border-[#8692A6] w-full ml-2"
                    placeholder="Seleccionar"
                    name="lang"
                    value={formData.lang}
                    onChange={handleChange}
                  />
                  {formErrors.lang && (
                    <span className="text-red-500 text-xs ml-2">
                      {formErrors.lang}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-center items-center mx-4 sm:mx-12">
                <label className="w-28 flex justify-end">Huso horario</label>
                <div className="flex flex-col w-full">
                  <input
                    className="border p-2 rounded-md border-[#8692A6] w-full ml-2"
                    placeholder="(GMT-05:00) Bógota"
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                  />
                  {formErrors.timezone && (
                    <span className="text-red-500 text-xs ml-2">
                      {formErrors.timezone}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-center items-start mx-4 sm:mx-7">
                <label className="w-28 flex justify-end text-right sm:text-nowrap">
                  Firma de tus emails
                </label>
                <div className="flex flex-col w-full">
                  <textarea
                    className="border p-2 rounded-md border-[#8692A6] w-full ml-2"
                    placeholder="Descripción"
                    rows={5}
                    cols={50}
                    name="emails"
                    value={formData.emails}
                    onChange={handleChange}
                  />
                  {formErrors.emails && (
                    <span className="text-red-500 text-xs ml-2">
                      {formErrors.emails}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex sm:flex-row flex-col justify-center items-center mx-4 sm:mx-12">
                <label className="w-28 flex justify-center sm:justify-end text-right text-nowrap">
                  Cuenta conectada
                </label>
                <div className="p-2 w-full ml-2">
                  <div className="flex gap-x-2 flex-wrap justify-between items-center md:items-center gap-y-1 px-5 text-lg">
                    <div className="w-fit flex gap-4 items-center flex-wrap justify-center text-center">
                      <img
                        src={google}
                        alt="Google Icon"
                        className="w-20 h-6"
                      />
                      <span className="text-black text-sm lg:text-lg">
                        example@example.com
                      </span>
                    </div>
                    <span className="cursor-pointer underline text-[#011B4E] flex items-center justify-center text-center w-auto mx-auto text-sm lg:text-lg">
                      Desconectar
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-x-8 sm:gap-x-16 items-center">
                <span
                  className="text-[#35278c] font-bold cursor-pointer"
                  onClick={goBack}
                >
                  Cancelar
                </span>
                <button
                  className="bg-[#011B4E] text-white font-semibold py-3 px-6 sm:px-10 rounded-3xl text-xs sm:text-md"
                  onClick={handleSubmit}
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
