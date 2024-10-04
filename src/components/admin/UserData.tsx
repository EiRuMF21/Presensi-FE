import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ChevronLeft, Search} from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "Kinan Doe",
    email: "KinanDoe@gmail.com",
    password: "Thispas*****",
  },
  {
    id: 2,
    name: "Abbysa",
    email: "Abbysa00@gmail.com",
    password: "Thispas*****",
  },
  {
    id: 3,
    name: "Username",
    email: "Username@gmail.com",
    password: "Thispas*****",
  },
  {
    id: 4,
    name: "Aldi Manuel",
    email: "Manuelaldi@gmail.com",
    password: "Thispas*****",
  },
  {
    id: 5,
    name: "Bilal",
    email: "Bilalbilal@gmail.com",
    password: "Thispas*****",
  },
  {
    id: 6,
    name: "Cyd Dabir",
    email: "DabirCyd@gmail.com",
    password: "Thispas*****",
  },
  {
    id: 7,
    name: "Doe Kinan",
    email: "KinanDoe@gmail.com",
    password: "Thispas*****",
  },
  {
    id: 8,
    name: "Elzein",
    email: "Elzein123@gmail.com",
    password: "Thispas*****",
  },
  {
    id: 9,
    name: "Ghana Hasan",
    email: "Hasan89@gmail.com",
    password: "Thispas*****",
  },
  {
    id: 10,
    name: "Kadeen",
    email: "Kadeen76@gmail.com",
    password: "Thispas*****",
  },
];

const UserData: React.FC = () => {
  const [users] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const usersPerPage = 10;

  const handleAccept = (id: number) => {
    console.log(`Accepted user with id: ${id}`);
  };

  const handleDecline = (id: number) => {
    console.log(`Declined user with id: ${id}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="flex justify-between items-center ml-14 mb-2 border-b-[3px] py-[10px]">
        <button
          onClick={handleBack}
          className="absolute left-0 top-7 z-20 text-black border-b-[3px] py-[12px] px-5 -mt-6"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <h2 className="-mt-8 text-lg font-bold text-black">
          USER REGISTRATION
        </h2>
        <div className="flex items-center -mt-8 mr-[80vh] bg-gray-200 rounded-2xl px-4 py-2 w-80">
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

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse table-fixed">
          <thead>
            <tr className="bg-gray-200 border-b">
              <th className="w-12 px-4 py-2 font-semibold text-center text-gray-600">
                #
              </th>
              <th className="w-1/4 px-4 py-2 font-semibold text-left text-gray-600">
                Name
              </th>
              <th className="w-1/4 px-4 py-2 font-semibold text-left text-gray-600">
                Email
              </th>
              <th className="w-1/4 px-4 py-2 font-semibold text-left text-gray-600">
                Password
              </th>
              <th className="w-1/4 px-4 py-2 font-semibold text-center text-gray-600">
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
                <td className="px-4 py-3 text-gray-700">{user.name}</td>
                <td className="px-4 py-3 text-gray-700">{user.email}</td>
                <td className="px-4 py-3 text-gray-700">{user.password}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleAccept(user.id)}
                    className="px-3 py-1 mr-2 text-sm text-white bg-green-500 rounded hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDecline(user.id)}
                    className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Decline
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
    </div>
  );
};

export default UserData;
