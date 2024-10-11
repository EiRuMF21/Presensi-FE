import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Camera, ArrowLeft, Bell} from "lucide-react";

const ProfileSettings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "Litreum",
    email: "litreum123@gmail.com",
    phone: "08XXXXXXXXX",
    address: "Tokyo",
    position: "HRD",
    division: "Human Resource",
    yearOfEmployment: "2018",
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
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-[#A0DEFF] via-[#CAF4FF] to-[#5AB2FF]">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <button
          onClick={() => navigate(-1)}
          className="text-black"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold">Edit Profile</h1>
        <Bell
          size={24}
          className="text-black"
        />
      </div>

      <div className="flex items-center justify-center flex-1">
        <div className="relative w-full max-w-2xl p-8 bg-white shadow-lg rounded-3xl">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full">
                <Camera
                  size={48}
                  className="text-gray-400"
                />
              </div>
              <label
                htmlFor="file-upload"
                className="absolute bottom-0 right-0 p-1 bg-white rounded-full shadow-md cursor-pointer"
              >
                <Camera
                  size={20}
                  className="text-gray-600"
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
            {/* Name, Email, Phone, Address fields */}
            {["name", "email", "phone", "address"].map((key) => (
              <div
                key={key}
                className="grid items-center grid-cols-3 gap-2"
              >
                <label className="block col-span-1 text-sm font-medium text-gray-700 capitalize">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type="text"
                  name={key}
                  value={formData[key as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="w-full col-span-2 p-3 text-black border-2 border-blue-400 rounded-full bg-sky-100"
                />
              </div>
            ))}

            {/* Position and Division fields in one div */}
            <div className="grid items-center grid-cols-3 gap-2">
              <label className="block col-span-1 text-sm font-medium text-gray-700 capitalize">
                Position (Division)
              </label>
              <div className="flex col-span-2 space-x-2">
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-1/2 p-3 text-black border-2 border-blue-400 rounded-full bg-sky-100"
                />
                <input
                  type="text"
                  name="division"
                  value={formData.division}
                  onChange={handleInputChange}
                  className="w-1/2 p-3 text-black border-2 border-blue-400 rounded-full bg-sky-100"
                />
              </div>
            </div>

            {/* Year of Employment */}
            <div className="grid items-center grid-cols-3 gap-2">
              <label className="block col-span-1 text-sm font-medium text-gray-700">
                Year of Employment
              </label>
              <input
                type="text"
                name="yearOfEmployment"
                value={formData.yearOfEmployment}
                onChange={handleInputChange}
                className="w-full col-span-2 p-3 text-black border-2 border-blue-400 rounded-full bg-sky-100"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6 space-x-4">
              <button
                type="button"
                className="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded-xl"
              >
                Face Recognition
              </button>
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-xl"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
