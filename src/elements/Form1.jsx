import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import line from "../assets/line.png";

const Form1 = ({ propertyData, onFormDataChange }) => {
  const [active, setActive] = useState(0);
  const [activeElem, setActiveElem] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [openCurrency, setOpenCurrency] = useState(false);
  console.log(propertyData)

  useEffect (() => {
    if (propertyData.operation_type) {
      setIsChecked(propertyData.operation_type === "Venta");
    }
  }, [propertyData.operation_type]);

  const handleOperationTypeChange = (operation_type) => {
    onFormDataChange({ ...propertyData, operation_type: operation_type });
  };

  const handleCurrencyChange = (val) => {
    onFormDataChange({ ...propertyData, currency: val });
    setOpenCurrency(false);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleValue = (val) => () => {
    setActive(val);
    if (val === 0) {
      onFormDataChange({ ...propertyData, show_price_ad: true });
    } else {
      onFormDataChange({ ...propertyData, show_price_ad: false });
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 shadow-2xl p-5 xs:p-8 sm:p-12 rounded-2xl">
      <div className="flex justify-center items-center ">
        <span className="cursor-pointer font-bold text-md sm:text-lg text-white rounded-full bg-[#e5b219] p-2 h-8 text-center flex items-center border-4 border-[#fb9706] mr-[-0.2rem] z-10">
          1
        </span>
        <img src={line} className="h-2 w-20" />
        <span className="cursor-pointer font-bold text-md sm:text-lg text-white rounded-full bg-[#011b4e] p-2 h-8 text-center flex items-center border-4 border-[#d9d9d9] ml-[-0.2rem] z-10">
          2
        </span>
      </div>
      <div className="text-[#002f6d] font-bold text-center my-5 text-xl sm:text-2xl">
        Detalles de la propiedad
      </div>
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Tipo de propiedad
          </span>
          <span className="text-red-600">*</span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Casa"
            className="overflow-hidden w-full"
            name="type"
            value={propertyData.type}
            onChange={(e) =>
              onFormDataChange({ ...propertyData, type: e.target.value })
            }
          />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div>
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Tipo del anuncio
          </span>
          <span className="text-red-600">*</span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Anuncio"
            className=" overflow-hidden w-full"
            name="ad_type"
            value={propertyData.ad_type}
            onChange={(e) =>
              onFormDataChange({ ...propertyData, ad_type: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 items-start flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 flex  sm:justify-end ">
          <span className="text-[#686868] text-sm sm:text-md font-bold ">
            Descripción del anuncio
          </span>
          <span className="text-red-600">*</span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <textarea
            placeholder="Descripción"
            className=" overflow-hidden w-full"
            rows={6}
            col={20}
            name="ad_desc"
            value={propertyData.ad_desc}
            onChange={(e) =>
              onFormDataChange({ ...propertyData, ad_desc: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex relative justify-center gap-2 items-start flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end items-start">
          <span className="text-[#686868] text-sm sm:text-md font-bold ">
            Tipo de operación
          </span>
          <span className="text-red-600 ">*</span>
        </div>
        <div className="p-2  flex justify-start flex-wrap sm:justify-center w-full sm:w-2/3 sm:flex-col gap-2">
          {["Venta", "Renta", "Renta temporal"].map((operationType, index) => (
            <div key={index} className={`flex gap-x-2 `}>
              <input
                type="radio"
                name="operationtype"
                style={{
                  appearance: "none",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "relative",
                  cursor: "pointer",
                }}
                className="custom-checkbox "
                checked={propertyData.operation_type === operationType}
                onChange={() => handleOperationTypeChange(operationType)}
              />
              <span className="font-semibold text-start text-[#686868]">
                {operationType}
              </span>
            </div>
          ))}
        </div>
      </div>
      {propertyData.operation_type === "Venta" && (
        <div className="bg-[#fffaea] w-full flex justify-center p-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center gap-2 items-center flex-col sm:flex-row w-full">
              <div className="w-full sm:w-1/3 flex sm:justify-end">
                <span className="text-[#686868] text-sm sm:text-md font-bold">
                  Precio de venta*
                </span>
                <span className="text-red-600">*</span>
              </div>
              <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md bg-white">
                <input
                  type="number"
                  placeholder="250,458.00"
                  className="overflow-hidden w-full focus:outline-none"
                  name="price"
                  value={propertyData.price}
                  onChange={(e) =>
                    onFormDataChange({
                      ...propertyData,
                      price: e.target.value,
                    })
                  }
                />
              </div>
              <div className="relative p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md bg-white">
                <div
                  className="flex justify-between cursor-pointer w-full"
                  onClick={() => setOpenCurrency(!openCurrency)}
                >
                  <div className="overflow-hidden w-full focus:outline-none flex justify-start">
                    {propertyData.currency}
                  </div>
                  <KeyboardArrowDownIcon className="" />
                  {openCurrency && (
                    <div className="absolute top-10 w-full left-0 flex flex-col bg-white p-2">
                      {[
                        "USD",
                        "MXN",
                        "ARS",
                        "BRL",
                        "CLP",
                        "COP",
                        "CRC",
                        "DOP",
                        "EGP",
                        "EUR",
                        "GTQ",
                        "PEN",
                      ].map((currency) => (
                        <span
                          key={currency}
                          className="w-full text-sm text-[#6E6E70] font-semibold text-start cursor-pointer hover:bg-[#002f6d] hover:text-white p-2 rounded-md"
                          onClick={() => handleCurrencyChange(currency)}
                        >
                          {currency}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Mostrar precios en el anuncio
          </span>
          <span className="text-red-600 ">*</span>
        </div>
        <div className="px-4 py-2  flex justify-center w-full sm:w-2/3 gap-2 border rounded-md border-[#D9D9D9]">
          <div
            className={`font-bold ${
              active === 0 && "text-white bg-[#011B4E]"
            }  rounded-md w-1/2  p-2 text-[#011B4E] cursor-pointer`}
            onClick={handleValue(0)}
          >
            Si
          </div>
          <div
            className={`font-bold ${
              active === 1 && "text-white bg-[#011B4E]"
            }  rounded-md w-1/2  p-2 text-[#011B4E] cursor-pointer`}
            onClick={handleValue(1)}
          >
            No
          </div>
        </div>
      </div>
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Recamaras
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Ninguno"
            className=" overflow-hidden w-full"
            name="bedroom"
            value={propertyData.bedroom}
            onChange={(e) =>
              onFormDataChange({ ...propertyData, bedroom: e.target.value })
            }
          />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div>
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Baños
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Ninguno"
            className=" overflow-hidden w-full"
            name="bathrooms"
            value={propertyData.bathrooms}
            onChange={(e) =>
              onFormDataChange({ ...propertyData, bathrooms: e.target.value })
            }
          />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div>
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Medios baños
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Ninguno"
            className=" overflow-hidden w-full"
            name="half_bath"
            value={propertyData.half_bath}
            onChange={(e) =>
              onFormDataChange({ ...propertyData, half_bath: e.target.value })
            }
          />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div>
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Estacionamientos
          </span>

          <span className="text-red-600"></span>
        </div>
        <div className="ps-2 flex items-start sm:items-center gap-2 w-full sm:w-2/3 flex-col sm:flex-row">
          <div className="flex items-center justify-start sm:justify-center gap-2 w-full sm:w-1/2">
            <div className="w-fit flex justify-center">
              <span className="text-[#686868] text-sm sm:text-md font-bold">
                Techados
              </span>
            </div>
            <div className="p-2  flex justify-between w-full sm:w-3/4 border border-[#8692A6] rounded-md">
              <input
                placeholder="Ninguno"
                className=" overflow-hidden text-xs w-full"
                name="parking_lots"
                value={propertyData.parking_lots}
                onChange={(e) =>
                  onFormDataChange({
                    ...propertyData,
                    parking_lots: e.target.value,
                  })
                }
              />
              <KeyboardArrowDownIcon className="text-[#686868]" />
            </div>
          </div>
          <div className="flex items-center justify-start sm:justify-center gap-2 w-full sm:w-1/2">
            <div className="w-fit flex justify-center">
              <span className="text-[#686868] text-sm sm:text-md font-bold text-nowrap">
                Sin techo
              </span>
            </div>
            <div className="p-2  flex justify-between w-full sm:w-3/4 border border-[#8692A6] rounded-md text-xs">
              <input placeholder="Ninguno" className=" overflow-hidden " />
              <KeyboardArrowDownIcon className="text-[#686868]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-2 items-start sm:items-center flex-col sm:flex-row">
        <div className="w-1/3 flex justify-start sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Construcción
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-3/4 sm:w-2/5 border border-[#8692A6] rounded-md">
          <input
            placeholder=""
            className=" overflow-hidden w-full"
            name="construction"
            value={propertyData.construction}
            onChange={(e) =>
              onFormDataChange({
                ...propertyData,
                construction: e.target.value,
              })
            }
          />
          <span className="bg-[#E0E0E0] rounded-md p-2 px-6 font-semibold text-sm sm:text-md">
            m2
          </span>
        </div>
      </div>
      <div className="flex justify-start gap-2 items-start sm:items-center flex-col sm:flex-row">
        <div className="w-1/3 flex justify-start sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Terreno
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-3/4 sm:w-2/5 border border-[#8692A6] rounded-md">
          <input placeholder="" className=" overflow-hidden w-full" />
          <span className="bg-[#E0E0E0] rounded-md p-2 px-6 font-semibold text-sm sm:text-md">
            m2
          </span>
        </div>
      </div>
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Año de construcción
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full  sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Ninguno"
            className=" overflow-hidden w-full"
            name="year_construction"
            value={propertyData.year_construction}
            onChange={(e) =>
              onFormDataChange({
                ...propertyData,
                year_construction: e.target.value,
              })
            }
          />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div>{" "}
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold text-start">
            Cantidad de plantas en la propiedad
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Ninguno"
            className=" overflow-hidden w-full"
            name="number_plants"
            value={propertyData.number_plants}
            onChange={(e) =>
              onFormDataChange({
                ...propertyData,
                number_plants: e.target.value,
              })
            }
          />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div>{" "}
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Cantidad de pisos en el edificio
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Ninguno"
            className=" overflow-hidden w-full"
            name="number_floors"
            value={propertyData.number_floors}
            onChange={(e) =>
              onFormDataChange({
                ...propertyData,
                number_floors: e.target.value,
              })
            }
          />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div>{" "}
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Mantenimiento mensual
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Ninguno"
            className=" overflow-hidden w-full"
            name="monthly_maintence"
            value={propertyData.monthly_maintence}
            onChange={(e) =>
              onFormDataChange({
                ...propertyData,
                monthly_maintence: e.target.value,
              })
            }
          />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div>{" "}
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Clave interna
          </span>
          <span className="text-red-600"></span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Ninguno"
            className=" overflow-hidden w-full"
            name="internal_key"
            value={propertyData.internal_key}
            onChange={(e) =>
              onFormDataChange({
                ...propertyData,
                internal_key: e.target.value,
              })
            }
          />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div>{" "}
      <div className="flex  justify-center gap-2 items-center flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 flex sm:justify-end">
          <span className="text-[#686868] text-sm sm:text-md font-bold">
            Código de la llave
          </span>
        </div>
        <div className="p-2 px-4 flex justify-between w-full sm:w-2/3 border border-[#8692A6] rounded-md">
          <input
            placeholder="Ninguno"
            className=" overflow-hidden w-full"
            name="key_code"
            value={propertyData.key_code}
            onChange={(e) =>
              onFormDataChange({
                ...propertyData,
                key_code: e.target.value,
              })
            }
          />
          <KeyboardArrowDownIcon className="text-[#686868]" />
        </div>
      </div>
    </div>
  );
};

export default Form1;
