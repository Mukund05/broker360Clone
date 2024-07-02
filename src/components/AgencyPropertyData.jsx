import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../Api';
import PropertyCard from '../elements/PropertyCard';
import CloseIcon from "@mui/icons-material/Close";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import CustomHeader from '../elements/CustomHeader';
import Footer from '../elements/Footer';
import Map from './Map';

const AgencyPropertyData = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [propData, setPropData] = useState([]);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await Api.getUserProperty(id);
        if (response.success) {
          setPropData(response.data);
        } else {
          setError("Failed to fetch property data");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchUserData = async () => {
      try {
        const response = await Api.getUserData(id);
        if (response.success) {
          setUserData(response.data);
        } else {
          setError("Failed to fetch user data");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProperty();
    fetchUserData();
  }, [id]);

  const Modal = ({ setModal }) => (
    <div className="relative">
      <div className="fixed top-16 right-10 rounded-2xl w-3/4 md:w-1/3 bg-white z-20">
        <div className="bg-[#011B4E] text-white font-semibold rounded-t-2xl text-xl px-10 py-5 text-center">
          Artículos que te pueden interesar
        </div>
        <div className="px-8 flex flex-col gap-3 py-4 overflow-x-auto max-h-[22rem] pb-20 scrollbar-hide">
          <span className="text-black bg-[#f2f2f2] font-semibold p-3 rounded-md">
            👋 Hola. ¿En qué te puedo ayudar? Aquí algunos artículos que te
            pueden ayudar
          </span>
          <div className="flex flex-col gap-3 p-3 text-sm bg-[#f2f2f2] rounded-md">
            <span className="text-[#6E6E70] font-bold">Artículo 1</span>
            <span className="text-[#6E6E70]">
              Lorem ipsum dolor sit amet consectetur. Posuere aliquam dui
              vestibulum tellus dolor. Eros sollicitudin tortor et vulputate
              aliquam sem malesuada. Vitae ac porta ut in massa. Adipiscing
              volutpat nam venenatis scelerisque turpis pellentesque.
            </span>
          </div>

          <div className="flex flex-col gap-3 p-3 text-sm bg-[#f2f2f2] rounded-md">
            <span className="text-[#6E6E70] font-bold">Artículo 2</span>
            <span className="text-[#6E6E70]">
              Lorem ipsum dolor sit amet consectetur. Posuere aliquam dui
              vestibulum tellus dolor. Eros sollicitudin tortor et vulputate
              aliquam sem malesuada. Vitae ac porta ut in massa. Adipiscing
              volutpat nam venenatis scelerisque turpis pellentesque.
            </span>
          </div>
        </div>

        <input
          className="absolute w-full bottom-0 left-0 text-sm font-semibold text-[#737376] p-5 focus:outline-none rounded-b-2xl"
          placeholder="Busca en nuestros artículos "
        />
      </div>
    </div>
  );

  const handleMarkerClick = (property) => {
    alert(`Property: ${property.name}`);
  };

  return (
    <div className="relative">
      <div
        className="z-40 fixed bottom-4 right-10 bg-[#002F6D] flex gap-2 justify-center items-center px-4 p-2 rounded-md cursor-pointer"
        onClick={() => setModal(!modal)}
      >
        {modal ? (
          <CloseIcon className="text-white" />
        ) : (
          <OpenWithIcon className="text-white" />
        )}

        <span className="text-white text-xl font-semibold">Chat</span>
      </div>
      <CustomHeader index={0} />
      <div className="bg-[#eff6ff] flex gap-2 py-3 flex-col md:flex-row px-4">
        <div className="w-[90%] md:w-1/5 xl:w-3/6 border-xl flex justify-between md:px-0">
         
          <Map properties={propData} />

        </div>
        <div className="px-4 py-4 flex flex-col gap-y-2">
          {error && <div className="text-red-500">{error}</div>}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold">User Data</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            {/* Add other user data as needed */}
          </div>
          <div className="border-t border-[#6E6E70] my-1"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center w-full">
            {propData.length > 0 ? (
              propData.map((property, index) => (
                <PropertyCard
                  key={index}
                  heading={property.name}
                  property={property}
                  route={`/my-property/property-details/${property.id}`}
                />
              ))
            ) : (
              <div>Cargando propiedades...</div>
            )}
          </div>
        </div>
      </div>
      {modal && <Modal setModal={setModal} />}
      <Footer />
    </div>
  );
}

export default AgencyPropertyData;
