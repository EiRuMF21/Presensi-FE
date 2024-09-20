import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const ProfileSettings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "LIEURTREM",
    email: "@gmail.com",
    NumberTelephone: "+62-",
    position: "HRD",
    YearOfEmployment: "5+",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="items-center min-h-screen text-black bg-gray-200">
      {/* Navbar */}
      <div className="flex items-center justify-between w-full px-4 py-4 bg-white shadow-md">
        <button
          onClick={() => navigate(-1)}
          className="text-black"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/back.png"
            alt="Back Icon"
          />
        </button>
        <h1 className="text-lg font-bold">Profile Settings</h1>
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/bell.png"
          alt="Notification Icon"
          className="text-black"
        />
      </div>

      <div className="max-w-md p-6 mx-auto mt-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img
              src="https://img.icons8.com/ios-glyphs/96/cccccc/user--v1.png"
              alt="Profile"
              className="object-cover w-24 h-24 bg-gray-300 rounded-full"
            />
            <label
              htmlFor="file-upload"
              className="absolute bottom-0 right-0"
            >
              <img
                src="https://img.icons8.com/ios-filled/24/000000/camera.png"
                alt="Upload Icon"
                className="w-6 h-6 cursor-pointer"
              />
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block font-semibold text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 text-black bg-white border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 text-black bg-white border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-600">
              Number Telephone
            </label>
            <input
              type="text"
              name="position"
              value={formData.NumberTelephone}
              onChange={handleInputChange}
              className="w-full p-2 text-black bg-white border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-600">
              Division of Work
            </label>
            <input
              type="text"
              name="division"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full p-2 text-black bg-white border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-600">
              Year of Employment
            </label>
            <input
              type="text"
              name="yearOfEmployment"
              value={formData.YearOfEmployment}
              onChange={handleInputChange}
              className="w-full p-2 text-black bg-white border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
