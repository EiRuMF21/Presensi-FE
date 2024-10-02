import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ChevronLeft, Search} from "lucide-react";
import axios from "axios";

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
];

const ManageUser: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const handleView = (user: User) => {
    setSelectedUser(user);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    setSelectedUser(null);
  };

  const handlePopup = () => {
    setSelectedUser(null);
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
          <ChevronLeft className="w-8 h-8" />
        </button>
        <h2 className="-mt-8 text-lg font-bold text-black">MANAGE USER</h2>
        <div className="flex items-center -mt-8 mr-[80vh] bg-gray-200 rounded-2xl px-4 py-2 w-80">
          <div className="w-5 h-5 text-gray-500 " />
          <Search className="-ml-5 text-[#979797]" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full ml-2 text-black bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="min-w-full border-collapse table-fixed">
          <thead>
            <tr className="bg-[#FFFFFF]">
              <th className="w-12 px-4 py-2 font-semibold text-center text-gray-600">
                #
              </th>
              <th className="w-1/4 px-4 py-2 font-semibold text-left text-gray-600">
                User
              </th>
              <th className="w-1/6 px-4 py-2 font-semibold text-left text-gray-600">
                Position
              </th>
              <th className="w-1/6 px-4 py-2 font-semibold text-left text-gray-600">
                Division
              </th>
              <th className="w-1/6 px-4 py-2 font-semibold text-left text-gray-600">
                Remaining Days Off
              </th>
              <th className="w-1/6 px-4 py-2 font-semibold text-left text-gray-600">
                User Password
              </th>
              <th className="w-32 px-4 py-2 font-semibold text-center text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr
                key={user.id}
                className="border-b"
              >
                <td className="px-4 py-3 text-center text-black">
                  {indexOfFirstUser + index + 1}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm font-normal text-gray-900">
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
                <td className="flex items-center justify-center px-4 py-3 space-x-2 text-center">
                  <button
                    onClick={() => handleView(user)}
                    className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.48 9.59L9.77 11.7a1 1 0 01-1.31-.63l-.39-1.19-1.13-.32a.25.25 0 010-.48L9.2 8.3a1 1 0 01.96.26l1.35 1.36 2.62-.72a.25.25 0 01.32.32l-.72 2.63-1.36 1.35a1 1 0 01-.39.23z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
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
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">
            Showing {indexOfFirstUser + 1} to{" "}
            {Math.min(indexOfLastUser, filteredUsers.length)} out of{" "}
            {filteredUsers.length} entries
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-gray-600 transition-colors bg-gray-200 rounded-full disabled:opacity-50 hover:bg-gray-300"
            >
              Previous
            </button>
            <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
              <span className="font-bold text-white">{currentPage}</span>
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
              }
              disabled={currentPage === pageNumbers.length}
              className="px-4 py-2 text-gray-600 transition-colors bg-gray-200 rounded-full disabled:opacity-50 hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modal for editing user */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 h-[40em] w-[45rem]  px-14">
            <div className="border-b-[3px] flex  border-black pb-2">
              <div className="flex">
                <button
                  onClick={handlePopup}
                  className="left-0 z-20 text-black"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              </div>
              <h2 className="text-xl flex justify-center text-black ml-[33vh] font-semibold">
                Change
              </h2>
            </div>
            <div className="mt-5 space-y-4">
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">User</h1>
                <input
                  type="text"
                  value={selectedUser.name}
                  readOnly
                  className="w-full text-black pl-4 rounded-xl focus:outline-none max-w-[40vh] h-9 bg-[#D9D9D9]"
                />
              </div>
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">Password</h1>
                <input
                  type="password"
                  value={selectedUser.password}
                  readOnly
                  className="w-full text-black pl-4 rounded-xl focus:outline-none max-w-[40vh] h-9 bg-[#D9D9D9]"
                />
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
                <p className="px-20 text-black">13 September 2024</p>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-8 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-3xl"
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

export default ManageUser;
