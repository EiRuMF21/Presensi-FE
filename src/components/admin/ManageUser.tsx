import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ChevronLeft, Search} from "lucide-react";

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
];

const ManageUser: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
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
          MANAGE USER
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
                className="flex flex-col mb-4 border-b sm:table-row sm:mb-0"
              >
                <td className="block px-2 py-1 text-center text-black sm:px-4 sm:py-3 sm:table-cell">
                  <span className="font-bold sm:font-normal sm:hidden">
                    No:{" "}
                  </span>
                  {indexOfFirstUser + index + 1}
                </td>
                <td className="block px-2 py-1 sm:px-4 sm:py-3 sm:table-cell">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full sm:w-10 sm:h-10"></div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm font-normal text-gray-900">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="block px-2 py-1 text-gray-700 sm:px-4 sm:py-3 sm:table-cell">
                  <span className="font-bold sm:hidden">Position: </span>
                  {user.position}
                </td>
                <td className="block px-2 py-1 text-gray-700 sm:px-4 sm:py-3 sm:table-cell">
                  <span className="font-bold sm:hidden">Division: </span>
                  {user.division}
                </td>
                <td className="block px-2 py-1 text-gray-700 sm:px-4 sm:py-3 sm:table-cell">
                  <span className="font-bold sm:hidden">
                    Remaining Days Off:{" "}
                  </span>
                  {user.remainingDaysOff} Days Left
                </td>
                <td className="block px-2 py-1 text-gray-700 sm:px-4 sm:py-3 sm:table-cell">
                  <span className="font-bold sm:hidden">Password: </span>
                  {user.password}
                </td>
                <td className="block px-2 py-1 text-center sm:px-4 sm:py-3 sm:table-cell">
                  <div className="flex items-center justify-between sm:justify-center">
                    <button
                      onClick={() => handleView(user)}
                      className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 sm:w-5 sm:h-5"
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
                        className="w-4 h-4 sm:w-5 sm:h-5"
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

      {/* Modal for editing user */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-[45rem] max-h-[90vh] overflow-y-auto">
            <div className="border-b-[3px] flex border-black pb-2">
              <div className="flex">
                <button
                  onClick={handlePopup}
                  className="left-0 z-20 text-black"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>
              <h2 className="flex-grow text-xl font-semibold text-center text-black">
                Change
              </h2>
            </div>
            <div className="mt-5 space-y-4">
              {Object.entries(selectedUser).map(
                ([key, value]) =>
                  key !== "id" && (
                    <div
                      key={key}
                      className="flex flex-col sm:flex-row justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-2 sm:px-4"
                    >
                      <h1 className="mb-1 text-black capitalize sm:mb-0">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </h1>
                      <input
                        type={key === "password" ? "password" : "text"}
                        value={value}
                        readOnly
                        className="w-full sm:max-w-[40vh] text-black pl-4 rounded-xl focus:outline-none h-9 bg-[#D9D9D9]"
                      />
                    </div>
                  )
              )}
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-6 py-2 text-white bg-blue-500 sm:px-8 hover:bg-blue-600 rounded-3xl"
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
