import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, ArrowLeft, Bell } from "lucide-react";
import axios from "axios";
import {jwtDecode, JwtPayload } from "jwt-decode";

// Perluas tipe JwtPayload
interface CustomJwtPayload extends JwtPayload {
  userID: string; // Sesuaikan tipe jika bukan string
}

const ProfileSettings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    division: "",
    yearOfEmployment: "",
    facePhoto: "",
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("User not logged in or token missing");
          return;
        }

        const decodedToken = jwtDecode<CustomJwtPayload>(token);
        console.log("Decoded Token:", decodedToken);

        if (!decodedToken.userID) {
          console.error("Invalid token or missing userID");
          return;
        }

        const response = await axios.get(
          `https://api-smart.curaweda.com/api/myaccount`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const profileData = response.data;
        setFormData({
          name: profileData.name || "",
          email: profileData.email || "",
          phone: profileData.phone || "",
          address: profileData.address || "",
          position: profileData.position || "",
          division: profileData.division || "",
          yearOfEmployment: profileData.yearOfEmployment || "",
          facePhoto: profileData.facePhoto || "",
        });

        if (profileData.facePhoto) {
          setPhotoPreview(profileData.facePhoto);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(
            "Error fetching profile data:",
            error.response?.status,
            error.response?.data
          );
        } else {
          console.error("An unknown error occurred:", error);
        }
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("User not logged in or token missing");
        return;
      }

      const decodedToken = jwtDecode<CustomJwtPayload>(token);

      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("address", formData.address);
      data.append("position", formData.position);
      data.append("division", formData.division);
      data.append("yearOfEmployment", formData.yearOfEmployment);
      if (photoFile) {
        data.append("facePhoto", photoFile);
      }

      console.log("Data to be sent:", formData); // Debug log
      const response = await axios.put(
        `https://api-smart.curaweda.com/api/accounts/${decodedToken.userID}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Profile updated response:", response.status, response.data);
      alert("Profile updated successfully!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error updating profile:",
          error.response?.status,
          error.response?.data
        );
      } else {
        console.error("An unknown error occurred while updating:", error);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-[#A0DEFF] via-[#CAF4FF] to-[#5AB2FF] md:px-44  lg:px-10 xl:px-[58vh] xxl:px-[3vh]">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <button onClick={() => navigate(-1)} className="text-black">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold">Edit Profile</h1>
        <Bell size={24} className="text-black" />
      </div>

      <div className="flex items-center justify-center flex-1">
        <div className="relative w-full max-w-2xl p-8 bg-white shadow-lg rounded-3xl">
          <div className="flex justify-center mb-6">
            <label htmlFor="photo" className="cursor-pointer">
              <img
                src={
                  photoPreview ||
                  formData.facePhoto ||
                  "https://via.placeholder.com/150"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="mt-2 text-gray-500">
                <Camera size={24} />
              </div>
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "email", "phone", "address"].map((key) => (
              <div
                key={key}
                className="grid items-center grid-cols-3 gap-2 bg-[#1E88E5] py-1 px-1 rounded-xl"
              >
                <label className="ml-5 block col-span-1 text-sm text-[#FFFFFF] capitalize">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type={key === "email" ? "email" : "text"}
                  name={key}
                  value={formData[key as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="w-full col-span-2 px-3 py-2 text-black border-2 border-blue-400 rounded-2xl bg-[#FFFFFF]"
                />
              </div>
            ))}

            <div className="grid items-center grid-cols-3 gap-2 bg-[#1E88E5] py-1 px-1 rounded-xl">
              <label className="ml-5 block col-span-1 text-md font-medium text-[#FFFFFF] capitalize">
                Position
              </label>
              <div className="flex col-span-2 space-x-2">
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full col-span-2 px-3 py-2 text-black border-2 border-blue-400 rounded-2xl bg-[#FFFFFF]"
                />
                <label className="ml-5 mt-2 text-md item font-medium text-[#FFFFFF] capitalize">
                  Division
                </label>
                <input
                  type="text"
                  name="division"
                  value={formData.division}
                  onChange={handleInputChange}
                  className="w-full col-span-2 px-3 py-2 text-black border-2 border-blue-400 rounded-2xl bg-[#FFFFFF]"
                />
              </div>
            </div>

            <div className="grid items-center grid-cols-3 gap-2 bg-[#1E88E5] py-1 px-1 rounded-xl">
              <label className="ml-5 block col-span-1 text-sm font-medium text-[#FFFFFF]">
                Year of Employment
              </label>
              <input
                type="text"
                name="yearOfEmployment"
                value={formData.yearOfEmployment}
                onChange={handleInputChange}
                className="w-full col-span-2 px-3 py-2 text-black border-2 border-blue-400 rounded-2xl bg-[#FFFFFF]"
              />
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                type="button"
                className="px-2 py-3 font-semibold text-white shadow-slate-600 shadow-md bg-green-500 rounded-xl"
              >
                Face Recognition
              </button>
              <button
                type="submit"
                className="px-4 py-3 font-semibold text-white shadow-slate-600 shadow-md bg-blue-500 rounded-xl"
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
