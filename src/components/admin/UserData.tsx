import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ChevronLeft, Search, MoreVertical} from "lucide-react";

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
    <div className="min-h-screen bg-[#FFFFFF] overflow-hidden py-2 px-2 sm:px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 border-b-[3px]">
        <button
          onClick={handleBack}
          className="text-black py-2 px-2 sm:py-[12px] sm:px-5"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <h2 className="my-2 text-lg font-bold text-black sm:my-0">
          USER REGISTER
        </h2>
        <div className="flex justify-center w-full sm:w-auto sm:flex-1">
          <div className="flex items-center w-full px-2 py-1 bg-gray-200 sm:px-4 sm:py-2 rounded-2xl sm:w-80">
            <Search className="text-[#979797] w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full ml-2 text-sm text-black bg-transparent outline-none sm:text-base"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse table-auto sm:table-fixed">
          <thead className="hidden sm:table-header-group">
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
                className="flex flex-col mb-4 border-b sm:table-row sm:mb-0"
              >
                <td className="block px-2 py-1 text-center text-black sm:px-4 sm:py-3 sm:table-cell">
                  <span className="font-bold sm:font-normal">
                    {indexOfFirstUser + index + 1}
                  </span>
                </td>
                <td className="block px-2 py-1 text-gray-700 sm:px-4 sm:py-3 sm:table-cell">
                  <span className="font-bold sm:hidden">Name: </span>
                  {user.name}
                </td>
                <td className="block px-2 py-1 text-gray-700 sm:px-4 sm:py-3 sm:table-cell">
                  <span className="font-bold sm:hidden">Email: </span>
                  {user.email}
                </td>
                <td className="block px-2 py-1 text-gray-700 sm:px-4 sm:py-3 sm:table-cell">
                  <span className="font-bold sm:hidden">Password: </span>
                  {user.password}
                </td>
                <td className="block px-2 py-1 text-center sm:px-4 sm:py-3 sm:table-cell">
                  <div className="flex items-center justify-between sm:justify-center">
                    <div className="sm:hidden">
                      <button className="p-1 text-gray-500">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="hidden sm:block">
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
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col items-center justify-between mt-4 sm:flex-row">
          <p className="mb-2 text-sm text-gray-500 sm:mb-0">
            Showing {indexOfFirstUser + 1} to{" "}
            {Math.min(indexOfLastUser, filteredUsers.length)} out of{" "}
            {filteredUsers.length} entries
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm text-gray-600 transition-colors bg-gray-200 rounded-full sm:px-4 sm:py-2 sm:text-base disabled:opacity-50 hover:bg-gray-300"
            >
              Previous
            </button>
            <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full sm:w-10 sm:h-10">
              <span className="text-sm font-bold text-white sm:text-base">
                {currentPage}
              </span>
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
              }
              disabled={currentPage === pageNumbers.length}
              className="px-3 py-1 text-sm text-gray-600 transition-colors bg-gray-200 rounded-full sm:px-4 sm:py-2 sm:text-base disabled:opacity-50 hover:bg-gray-300"
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
