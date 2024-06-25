import React, { useCallback, useEffect, useState } from "react";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Api from "../Api";

const Tasks = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    assignment: "",
    date: new Date(),
    deliveryTime: "",
    assignedTo: "",
    category: "Without category",
    link: "",
  });
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState({});

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchTasks = useCallback(async () => {
    if (user) {
        setModalData((prevData) => ({ ...prevData, assignedTo: user.name }));
      try {
        const response = await Api.getUserTask(user.id);
        if (response.success) setTasks(response.data);
      } catch (error) {
        console.log("Error while fetching tasks:", error);
      }
    }
  }, [user]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setModalData((prevData) => ({ ...prevData, date }));
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setShowModal(false);
  };

  const validateModalData = () => {
    let newErrors = {};
    if (!modalData.assignment) newErrors.assignment = "Assignment is required";
    if (!modalData.deliveryTime)
      newErrors.deliveryTime = "Delivery time is required";
    if (!modalData.assignedTo) newErrors.assignedTo = "Assigned to is required";
    if (!modalData.category) newErrors.category = "Category is required";
    if (!modalData.link ) newErrors.link = "Link is Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateClick = async () => {
    if (validateModalData()) {
      const formattedDate = modalData.date.toISOString().slice(0, 10);
      const data = {
        desc: modalData.assignment,
        date: formattedDate,
        time: modalData.deliveryTime,
        assigned_to: 1, // Change this as per your logic
        category: modalData.category,
        link: modalData.link,
      };

      try {
        const response = await Api.sendTask(data);
        if (response.success) {
          setShowModal(false);
          // Fetch tasks immediately after creating a new task
          const updatedTasks = await Api.getUserTask(user.id);
          if (updatedTasks.success) setTasks(updatedTasks.data);
        }
      } catch (error) {
        console.log("Error creating task:", error);
      }
    }
  };

  const timeOptions = Array.from({ length: 24 * 4 }, (_, i) => {
    const hours = Math.floor(i / 4);
    const minutes = (i % 4) * 15;
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  });

  const categories = [
    "Without category",
    "Call",
    "E-mail",
    "Meeting",
    "Order via web",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <CustomHeader />
      <div className="flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddClick}
          >
            + Add
          </button>
        </div>
        <div>
          {tasks.length > 0 &&
            tasks.map((item, index) => (
              <div key={index} className="border p-4 rounded mb-2">
                <input type="checkbox" className="mr-2" />
                <span className="border px-2 py-1 mr-2">{item.category}</span>
                <span>{item?.desc}</span>
              </div>
            ))}
        </div>
      </div>
      <Footer />
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">New Task</h2>
              <button onClick={handleCloseClick} className="text-gray-500">
                &times;
              </button>
            </div>
            <textarea
              name="assignment"
              placeholder="Write your assignment here"
              value={modalData.assignment}
              onChange={handleInputChange}
              className="border p-2 mb-4 w-full"
            />
            {errors.assignment && (
              <p className="text-red-500">{errors.assignment}</p>
            )}
            <div className="flex gap-4 mb-4">
              <DatePicker
                selected={modalData.date}
                onChange={handleDateChange}
                className="border p-2 w-full"
                dateFormat="dd/MM/yyyy"
              />
              <select
                name="deliveryTime"
                value={modalData.deliveryTime}
                onChange={handleInputChange}
                className="border p-2 w-full"
              >
                <option value="">Delivery time</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            {errors.deliveryTime && (
              <p className="text-red-500">{errors.deliveryTime}</p>
            )}
            <div className="mb-4">
              <label className="block mb-2">Assigned to</label>
              <input
                type="text"
                name="assignedTo"
                value={user.name}
                onChange={handleInputChange}
                className="border p-2 w-full"
                disabled
              />
            </div>
            {errors.assignedTo && (
              <p className="text-red-500">{errors.assignedTo}</p>
            )}
            <div className="mb-4">
              <label className="block mb-2">Category</label>
              <select
                name="category"
                value={modalData.category}
                onChange={handleInputChange}
                className="border p-2 w-full"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            {errors.category && (
              <p className="text-red-500">{errors.category}</p>
            )}
            <div className="mb-4">
              <label className="block mb-2">Link</label>
              <input
                type="text"
                name="link"
                placeholder="Paste your link here"
                value={modalData.link}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </div>
            {errors.link && (
              <p className="text-red-500">{errors.link}</p>
            )}
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleCreateClick}
            >
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
