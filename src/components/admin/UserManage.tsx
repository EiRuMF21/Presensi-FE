import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Search } from "lucide-react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  registrationDate: string;
  position: string;
  division: string;
  remainingDaysOff: number;
  phone: number;
  password: string;
  address: string;
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "Kinan Doe",
    email: "Kinan@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 1",
  },
  {
    id: 2,
    name: "Abbysa",
    email: "Abbysa@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 2",
  },
  {
    id: 3,
    name: "Username",
    email: "User@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 3",
  },
  {
    id: 4,
    name: "Aldi Manuel",
    email: "Aldi@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 4",
  },
  {
    id: 5,
    name: "Bilal",
    email: "Bilal@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 5",
  },
  {
    id: 6,
    name: "Cyd Dabir",
    email: "Cyd@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 6",
  },
  {
    id: 7,
    name: "Doe Kinan",
    email: "Doe@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 7",
  },
  {
    id: 8,
    name: "Elzein",
    email: "Elzein@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 8",
  },
  {
    id: 9,
    name: "Ghana Hasan",
    email: "GhanaHasan@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 9",
  },
  {
    id: 10,
    name: "Kadeen",
    email: "Kadeen@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 10",
  },
  {
    id: 11,
    name: "Kadeen",
    email: "Kadeen@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 10",
  },
  {
    id: 12,
    name: "Kadeen",
    email: "Kadeen@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 10",
  },
  {
    id: 13,
    name: "Kadeen",
    email: "Kadeen@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 10",
  },
  {
    id: 14,
    name: "Kadeen",
    email: "Kadeen@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 10",
  },
  {
    id: 15,
    name: "Kadeen",
    email: "Kadeen@gmail.com",
    registrationDate: "2023-01-01",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    phone: 123456789,
    password: "pas*****",
    address: "Address 10",
  },
];

const UserDataTable: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // const [selectedUser, setSelectedUser] = useState<User | null>({
  //   id: 0,
  //   name: "",
  //   email: "",
  //   registrationDate: "",
  //   position: "",
  //   division: "",
  //   remainingDaysOff: 0,
  //   phone: 0,
  //   password: "",
  //   address: "",
  // });

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [showPassword, setShowPassword] = useState(false);

  const handleView = (user: User) => {
    setSelectedUser(user);
    setShowPassword(false); // Reset password visibility when opening new user popup
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`/users/${id}`);
        setUsers(users.filter((user) => user.id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user");
      }
    }
  };

  const handleBack = () => {
    navigate("/admin"); // This will navigate to the previous page
  };

  const handleSubmit = async () => {
    if (selectedUser) {
      try {
        await axios.post(`/users/${selectedUser.id}`, {
          name: selectedUser.name,
          position: selectedUser.position,
          division: selectedUser.division,
          remainingDaysOff: selectedUser.remainingDaysOff,
          phone: selectedUser.phone,
          address: selectedUser.address,
        });
        alert("User updated successfully");
        setSelectedUser(null);
      } catch (error) {
        console.error("Error updating user:", error);
        alert("Failed to update user");
      }
    } else {
      alert("No user selected");
    }
  };

  const handlePopup = () => {
    setSelectedUser(null);
  };

  const handleBoth = async () => {
    await handleSubmit();
    handlePopup();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-8 px-4">
      {/* Header */}
      <div className="flex justify-between items-center ml-14 mb-2 border-b-[3px]  py-[10px]">
        <button
          onClick={handleBack}
          className="absolute left-0 top-7 z-20 text-black border-b-[3px] py-[12px] px-5 -mt-6"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <h2 className="text-black font-bold text-lg -mt-8">MANAGE USER</h2>
        <div className="flex items-center -mt-8 mr-[80vh] bg-gray-200 rounded-2xl px-4 py-2 w-80">
          <div className="text-gray-500 h-5 w-5 " />
          <Search className="-ml-5 text-[#979797]" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-black ml-2 w-full"
          />
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="min-w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-[#FFFFFF]">
              <th className="w-12 px-4 py-2 text-center text-gray-600 font-semibold">
                #
              </th>
              <th className="w-1/4 px-4 py-2 text-left text-gray-600 font-semibold">
                User
              </th>
              <th className="w-1/6 px-4 py-2 text-left text-gray-600 font-semibold">
                Position
              </th>
              <th className="w-1/6 px-4 py-2 text-left text-gray-600 font-semibold">
                Division
              </th>
              <th className="w-1/6 px-4 py-2 text-left text-gray-600 font-semibold">
                Remaining Days Off
              </th>
              <th className="w-1/6 px-4 py-2 text-left text-gray-600 font-semibold">
                User Password
              </th>
              <th className="w-32 px-4 py-2 text-center text-gray-600 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-3 text-center text-black">
                  {indexOfFirstUser + index + 1}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="font-normal text-sm text-gray-900">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-700">{user.position}</td>
                <td className="px-4 py-3 text-gray-700">{user.division}</td>
                <td className="px-4 py-3 text-gray-700">
                  {user.remainingDaysOff} Days Left
                </td>
                <td className="px-4 py-3 text-gray-700">{user.password}</td>
                <td className="px-4 py-3 text-center flex justify-center items-center space-x-2">
                  <button
                    onClick={() => handleView(user)}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.48 9.59L9.77 11.7a1 1 0 01-1.31-.63l-.39-1.19-1.13-.32a.25.25 0 010-.48L9.2 8.3a1 1 0 01.96.26l1.35 1.36 2.62-.72a.25.25 0 01.32.32l-.72 2.63-1.36 1.35a1 1 0 01-.39.23z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Showing {indexOfFirstUser + 1} to{" "}
            {Math.min(indexOfLastUser, filteredUsers.length)} out of{" "}
            {filteredUsers.length} entries
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full bg-gray-200 text-gray-600 disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              Previous
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-white font-bold">{currentPage}</span>
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
              }
              disabled={currentPage === pageNumbers.length}
              className="px-4 py-2 rounded-full bg-gray-200 text-gray-600 disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modal for editing user */}
      {selectedUser !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 h-[40em] w-[45rem]  px-14">
            <div className="border-b-[3px] flex  border-black pb-2">
              <div className="flex">
                <button
                  onClick={handlePopup}
                  className="left-0 z-20 text-black"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              </div>
              <h2 className="text-xl flex justify-center text-black ml-[33vh] font-semibold">
                Change
              </h2>
            </div>
            <div className="space-y-4 mt-5">
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">User</h1>
                <input
                  type="text"
                  value={selectedUser.name}
                  className="w-full text-black pl-4 rounded-xl focus:outline-none max-w-[40vh] h-9 bg-[#D9D9D9]"
                />
              </div>
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">Password</h1>
                <div className="flex items-center bg-[#D9D9D9] rounded-xl max-w-[40vh] ">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Type your password"
                    value={selectedUser.password}
                    className="w-full text-black pl-4  pr-32 focus:outline-none h-9 bg-transparent"
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    className="focus:outline-none pr-3"
                    type="button"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">Position</h1>
                <input
                  type="text"
                  value={selectedUser.position}
                  readOnly
                  className="w-full text-black pl-4 rounded-xl focus:outline-none max-w-[40vh] h-9 bg-[#D9D9D9]"
                />
              </div>
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">Division</h1>
                <input
                  type="text"
                  value={selectedUser.division}
                  readOnly
                  className="w-full text-black pl-4 rounded-xl focus:outline-none max-w-[40vh] h-9 bg-[#D9D9D9]"
                />
              </div>
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">Remaining Days Off</h1>
                <input
                  type="text"
                  value={selectedUser.remainingDaysOff}
                  readOnly
                  className="w-full text-black pl-4 rounded-xl focus:outline-none max-w-[40vh] h-9 bg-[#D9D9D9]"
                />
              </div>
              <div className="flex justify-between   border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">Phone</h1>
                <input
                  type="text"
                  value={selectedUser.phone}
                  readOnly
                  className="w-full text-black pl-4 rounded-xl focus:outline-none max-w-[40vh] h-9 bg-[#D9D9D9]"
                />
              </div>
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">Address</h1>
                <input
                  type="text"
                  value={selectedUser.address}
                  readOnly
                  className="w-full text-black pl-4 rounded-xl focus:outline-none max-w-[40vh] h-9 bg-[#D9D9D9]"
                />
              </div>  
              <div className="flex justify-between border-b-[3px] pb-2  border-[#D9D9D9] px-4">
                <h1 className="text-black">Registration Date</h1>
                <p className="text-black px-20">13 September 2024</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                onClick={handleBoth}
                className="bg-blue-500  hover:bg-blue-600 text-white px-8 py-2 rounded-3xl"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDataTable;
