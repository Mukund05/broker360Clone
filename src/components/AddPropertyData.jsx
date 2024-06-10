import React, { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import Form1 from "../elements/Form1";
import Form2 from "../elements/Form2";
import Form3 from "../elements/Form3";
import Form4 from "../elements/Form4";
import Api from "../Api"; // Import the API functions

const AddPropertyData = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data } = state || {};
  const isUpdate = Boolean(data);

  const [formNumber, setFormNumber] = useState(0);
  const [propertyData, setPropertyData] = useState({
    type: "",
    ad_type: "",
    ad_desc: "",
    operation_type: "rent",
    show_price_ad: true,
    price: 0,
    currency: "USD",
    bedroom: 0,
    bathrooms: 0,
    half_bath: 0,
    parking_lots: 0,
    construction: 0,
    year_construction: 0,
    number_plants: 0,
    number_floors: 20,
    monthly_maintence: 0,
    internal_key: "",
    key_code: "",
    user_id: undefined,
    street: "",
    corner_with: "",
    postal_code: "",
    property_features: "",
    share_commission: 0,
    commission_percent: 0,
    condition_sharing: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isUpdate) {
      setPropertyData((prevData) => ({
        ...prevData,
        ...data,
      }));
    }
  }, [isUpdate, data]);

  const goBack = () => {
    navigate(-1);
  };

  const handleFormDataChange = (newData) => {
    setPropertyData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const validateForm1 = () => {
    const newErrors = {};
if (!propertyData.type) newErrors.type = "Type is required.";
if (!propertyData.ad_type) newErrors.ad_type = "Ad type is required.";
if (!propertyData.ad_desc) newErrors.ad_desc = "Description is required.";
if (!propertyData.price) newErrors.price = "Price is required.";
if (!propertyData.currency) newErrors.currency = "Currency is required.";
if (!propertyData.bedroom) newErrors.bedroom = "Bedrooms are required.";
if (!propertyData.bathrooms) newErrors.bathrooms = "Bathrooms are required.";
if (!propertyData.half_bath) newErrors.half_bath = "Half bath is required.";
if (!propertyData.parking_lots) newErrors.parking_lots = "Parking lots are required.";
if (!propertyData.construction) newErrors.construction = "Construction is required.";
if (!propertyData.year_construction) newErrors.year_construction = "Year of construction is required.";
if (!propertyData.number_plants) newErrors.number_plants = "Number of plants is required.";
if (!propertyData.number_floors) newErrors.number_floors = "Number of floors is required.";
if (!propertyData.monthly_maintence) newErrors.monthly_maintence = "Monthly maintenance is required.";
if (!propertyData.internal_key) newErrors.internal_key = "Internal key is required.";
if (!propertyData.key_code) newErrors.key_code = "Key code is required.";


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm2 = () => {
    const newErrors = {};
    if (!propertyData.street) newErrors.street = "Street is required.";
    if (!propertyData.corner_with) newErrors.corner_with = "Corner with is required.";
    if (!propertyData.postal_code) newErrors.postal_code = "Postal code is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm3 = () => {
    // Add validations for Form3 if needed
    return true;
  };

  const validateForm4 = () => {
    const newErrors = {};
    if (!propertyData.share_commission) newErrors.share_commission = "Share commission is required.";
    if (!propertyData.commission_percent) newErrors.commission_percent = "Commission percent is required.";
    if (!propertyData.condition_sharing) newErrors.condition_sharing = "Condition sharing is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    try {
      const user = await Api.getProfile();
      const updatedPropertyData = {
        ...propertyData,
        user_id: user.id,
      };

      let response;
      if (isUpdate) {
        response = await Api.updateProperty(data.id, updatedPropertyData);
      } else {
        response = await Api.sendProperty(updatedPropertyData);
      }

      console.log("Property Submitted: ", response);
      navigate("/my-properties");
    } catch (error) {
      console.error("Failed to submit property: ", error);
    }
  };

  const handleNext = () => {
    let isValid = false;
    if (formNumber === 0) isValid = validateForm1();
    if (formNumber === 1) isValid = validateForm2();
    if (formNumber === 2) isValid = validateForm3();
    if (formNumber === 3) isValid = validateForm4();
    
    if (isValid) setFormNumber(formNumber + 1);
  };

  return (
    <div className="">
      <CustomHeader index={0} />
      <div className="bg-[#eff6ff] xs:px-4 flex flex-col md:relative md:p-4">
        <Link
          className="md:absolute inline-flex justify-start text-[#011B4E] sm:px-8 gap-3 md:top-6 md:left-4 md:my-0 my-4 mx-4"
          onClick={goBack}
        >
          <KeyboardBackspaceIcon />
          Atrás
        </Link>

        <div className="w-full md:w-[95%] m-auto flex sm:px-0 flex-col items-center text-center gap-y-4 justify-between">
          <div className="rounded-2xl shadow-2xl flex flex-col gap-y-14 bg-white items-center justify-center w-[85%] my-4 md:my-12">
            {formNumber === 0 && (
              <div className="w-full">
                <Form1 propertyData={propertyData} onFormDataChange={handleFormDataChange} />
                <div className="p-4 sm:p-10 flex flex-col gap-2 items-center">
                  {Object.keys(errors).length > 0 && (
                    <div className="text-red-500">
                      {Object.values(errors).map((error, index) => (
                        <div key={index}>{error}</div>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-5 sm:gap-10 justify-center items-center">
                    <span className="text-[#35278C] font-semibold text-md sm:text-lg cursor-pointer" onClick={goBack}>
                      Cancelar
                    </span>
                    <button
                      className="bg-[#011B4E] text-white font-semibold py-3 px-5 sm:px-16 rounded-full text-sm sm:text-lg"
                      onClick={handleNext}
                    >
                      Guardar y continuar
                    </button>
                  </div>
                </div>
              </div>
            )}
            {formNumber === 1 && (
              <div className="w-full">
                <Form2 propertyData={propertyData} onFormDataChange={handleFormDataChange} />
                <div className="p-4 sm:p-10 flex flex-col gap-2 items-center">
                  {Object.keys(errors).length > 0 && (
                    <div className="text-red-500">
                      {Object.values(errors).map((error, index) => (
                        <div key={index}>{error}</div>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-10 justify-center items-center">
                    <span className="text-[#35278C] font-semibold text-md sm:text-lg cursor-pointer" onClick={() => setFormNumber(formNumber - 1)}>
                      Cancelar
                    </span>
                    <button
                      className="bg-[#011B4E] text-white font-semibold py-3 px-5 sm:px-16 rounded-full text-sm sm:text-lg"
                      onClick={handleNext}
                    >
                      Guardar y continuar
                    </button>
                  </div>
                </div>
              </div>
            )}
            {formNumber === 2 && (
              <div className="w-full">
                <Form3 propertyData={propertyData} onFormDataChange={handleFormDataChange} />
                <div className="p-4 sm:p-10 flex flex-col gap-2 items-center">
                  <div className="flex gap-10 justify-center items-center">
                    <span className="text-[#35278C] font-semibold text-md sm:text-lg cursor-pointer" onClick={() => setFormNumber(formNumber - 1)}>
                      Cancelar
                    </span>
                    <button
                      className="bg-[#011B4E] text-white font-semibold py-3 px-5 sm:px-16 rounded-full text-sm sm:text-lg"
                      onClick={handleNext}
                    >
                      Guardar y continuar
                    </button>
                  </div>
                </div>
              </div>
            )}
            {formNumber === 3 && (
              <div className="w-full">
                <Form4 propertyData={propertyData} onFormDataChange={handleFormDataChange} />
                <div className="p-4 sm:p-10 flex flex-col gap-2 items-center">
                  {Object.keys(errors).length > 0 && (
                    <div className="text-red-500">
                      {Object.values(errors).map((error, index) => (
                        <div key={index}>{error}</div>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-10 justify-center items-center">
                    <span className="text-[#35278C] font-semibold text-md sm:text-lg cursor-pointer" onClick={() => setFormNumber(formNumber - 1)}>
                      Cancelar
                    </span>
                    <button
                      className="bg-[#011B4E] text-white font-semibold py-4 px-8 sm:px-16 rounded-full text-sm sm:text-lg"
                      onClick={handleSubmit}
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddPropertyData;
