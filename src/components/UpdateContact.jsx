import React, { useState } from "react";
import { TextField, CircularProgress, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import api from "../Api";

const UpdateContact = () => {
  const location = useLocation();
  const { contact } = location.state;

  const [contactDetails, setContactDetails] = useState({
    name: contact.name,
    last_name: contact.last_name,
    position: contact.position,
    company: contact.company,
    fountain: contact.fountain,
    number: contact.number,
    email: contact.email,
    twitter: contact.twitter,
    linkedin: contact.linkedin,
    skype: contact.skype,
    website: contact.website,
    address: contact.address,
    description: contact.description,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleUpdateContact = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await api.updateContact(contact.id, contactDetails);
      if (response.success) {
        navigate("/contactsList");
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(err.response?.data?.error || "Update failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <CustomHeader />
      <div className="bg-[#eff6ff] p-4 min-h-screen">
        <div className="w-full xs:w-4/5 sm:w-2/3 md:w-2/3 m-auto flex flex-col justify-center items-center text-center gap-y-6 py-8">
          <span className="text-[#011B4E] text-2xl sm:text-3xl md:text-5xl font-bold">Update Contact</span>
          <div className="flex flex-col gap-y-3 sm:w-[60%]">
            <label className="text-[#686868] flex justify-start font-bold">Name</label>
            <TextField
              name="name"
              value={contactDetails.name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <label className="text-[#686868] flex justify-start font-bold">Last Name</label>
            <TextField
              name="last_name"
              value={contactDetails.last_name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <label className="text-[#686868] flex justify-start font-bold">Position</label>
            <TextField
              name="position"
              value={contactDetails.position}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <label className="text-[#686868] flex justify-start font-bold">Company</label>
            <TextField
              name="company"
              value={contactDetails.company}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <label className="text-[#686868] flex justify-start font-bold">Fountain</label>
            <TextField
              name="fountain"
              value={contactDetails.fountain}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <label className="text-[#686868] flex justify-start font-bold">Phone Number</label>
            <TextField
              name="number"
              value={contactDetails.number}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <label className="text-[#686868] flex justify-start font-bold">Email Address</label>
            <TextField
              name="email"
              value={contactDetails.email}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <label className="text-[#686868] flex justify-start font-bold">Twitter</label>
            <TextField
              name="twitter"
              value={contactDetails.twitter}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <label className="text-[#686868] flex justify-start font-bold">LinkedIn</label>
            <TextField
              name="linkedin"
              value={contactDetails.linkedin}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <label className="text-[#686868] flex justify-start font-bold">Skype</label>
            <TextField
              name="skype"
              value={contactDetails.skype}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <label className="text-[#686868] flex justify-start font-bold">Website</label>
            <TextField
              name="website"
              value={contactDetails.website}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <label className="text-[#686868] flex justify-start font-bold">Address</label>
            <TextField
              name="address"
              value={contactDetails.address}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <label className="text-[#686868] flex justify-start font-bold">Private Description</label>
            <TextField
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
          <Button
            className="bg-[#011B4E] text-white font-semibold py-2 px-4 rounded-lg mt-4"
            onClick={handleUpdateContact}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Update"}
          </Button>
          <Button
            className="mt-2 text-gray-600"
            onClick={() => navigate("/contactsList")}
          >
            Cancel
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateContact;
