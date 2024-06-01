import React, { useState } from "react";
import { TextField, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import api from "../Api";

const CreateContact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    last_name: "",
    position: "",
    company: "",
    fountain: "",
    number: "",
    email: "",
    twitter: "",
    linkedin: "",
    skype: "",
    website: "",
    address: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleCreateContact = async () => {
    const { name, number, email } = contactDetails;
    if (!name || !number || !email) {
      setError("Name, Telephone number, and Email are required.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await api.createContact(contactDetails);
      if (response.success) {
        navigate("/contacts");
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(err.response?.data?.error || "Creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <CustomHeader />
      <div className="bg-[#eff6ff] p-4 ">
        <div className="w-full xs:w-4/5 sm:w-2/3 md:w-2/3 m-auto flex flex-col justify-center items-center text-center gap-y-6 py-8">
          <span className="text-[#011B4E] text-2xl sm:text-3xl md:text-5xl font-bold">
          Crear contacto
          </span>
          <div className="flex flex-col gap-y-3 sm:w-[60%]">
            <TextField
              label="Nombre"
              name="name"
              value={contactDetails.name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Apellido"
              name="last_name"
              value={contactDetails.last_name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Puesto"
              name="position"
              value={contactDetails.position}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Empresa"
              name="company"
              value={contactDetails.company}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Fuente"
              name="fountain"
              value={contactDetails.fountain}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Números de teléfono"
              name="number"
              value={contactDetails.number}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Direcciones de email"
              name="email"
              value={contactDetails.email}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Twitter"
              name="twitter"
              value={contactDetails.twitter}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="LinkedIn"
              name="linkedin"
              value={contactDetails.linkedin}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Skype"
              name="skype"
              value={contactDetails.skype}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Sitios web"
              name="website"
              value={contactDetails.website}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Domicilios"
              name="address"
              value={contactDetails.address}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Descripción privada"
              name="description"
              value={contactDetails.description}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </div>
          <span className="text-red-500 text-sm">{error}</span>
          <button
            className="bg-[#011B4E] text-white font-semibold py-3 px-6 sm:px-10 rounded-3xl text-md sm:text-lg sm:w-[60%]"
            onClick={handleCreateContact}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Crear"}
          </button>
          <span className="text-[#35278C] text-sm sm:text-xl font-semibold">
            Cancelar
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateContact;
