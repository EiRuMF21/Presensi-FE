import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ChevronLeft, Search, User} from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  division: string;
  photoStatus: string;
}

const initialData: User[] = [
  {
    id: 1,
    name: "Kinan Doe",
    email: "KinanDoe@gmail.com",
    division: "Division - Position",
    photoStatus: "Haven't scanned yet",
  },
  {
    id: 2,
    name: "Abbysa",
    email: "Abbysa00@gmail.com",
    division: "Division - Position",
    photoStatus: "Uploaded",
  },
  {
    id: 3,
    name: "Username",
    email: "Username@gmail.com",
    division: "Division - Position",
    photoStatus: "Uploaded",
  },
  {
    id: 4,
    name: "Aldi Manuel",
    email: "Manuelaldi@gmail.com",
    division: "Division - Position",
    photoStatus: "Uploaded",
  },
  {
    id: 5,
    name: "Bilal",
    email: "Bilalbilal@gmail.com",
    division: "Division - Position",
    photoStatus: "Uploaded",
  },
];

const FaceData: React.FC = () => {
  const [users] = useState<User[]>(initialData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState("ALL");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const usersPerPage = 10;

  const handleBack = () => {
    navigate(-1);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "ALL" ||
      (filter === "COMPLETE" && user.photoStatus === "Uploaded") ||
      (filter === "HAVEN'T" && user.photoStatus === "Haven't scanned yet");

    return matchesSearch && matchesFilter;
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFFFF] py-2 px-2 sm:px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 border-b-[3px] pb-2">
        <div className="flex items-center justify-between w-full sm:w-auto sm:justify-start">
          <button
            onClick={handleBack}
            className="text-black py-[12px] px-2 sm:px-5"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <h2 className="ml-2 text-base font-bold text-black sm:text-lg sm:ml-0">
            FACE DATA
          </h2>
        </div>
        <div className="flex flex-col items-center w-full mt-2 sm:flex-row sm:w-auto sm:mt-0">
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
          <select
            className="w-full px-2 py-1 text-sm text-black bg-white border border-gray-300 rounded-full sm:px-4 sm:py-2 sm:w-auto"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="ALL">SCANNING ALL</option>
            <option value="COMPLETE">COMPLETE</option>
            <option value="HAVEN'T">HAVEN'T</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="hidden sm:table-header-group">
            <tr className="bg-gray-200">
              <th className="w-12 px-4 py-2 font-semibold text-center text-gray-600">
                #
              </th>
              <th className="w-1/3 px-4 py-2 font-semibold text-left text-gray-600">
                User
              </th>
              <th className="w-1/4 px-4 py-2 font-semibold text-left text-gray-600">
                Division
              </th>
              <th className="w-1/6 px-4 py-2 font-semibold text-left text-gray-600">
                Photo
              </th>
              <th className="w-1/6 px-4 py-2 font-semibold text-center text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr
                key={user.id}
                className="flex flex-col border-b sm:table-row"
              >
                <td className="px-4 py-3 text-left text-black sm:text-center">
                  <span className="mr-2 font-semibold text-gray-600 sm:hidden">
                    #:
                  </span>
                  {indexOfFirstUser + index + 1}
                </td>
                <td className="px-4 py-3">
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
                <td className="px-4 py-3 text-gray-700">
                  <span className="mr-2 font-semibold text-gray-600 sm:hidden">
                    Division:
                  </span>
                  {user.division}
                </td>
                <td className="px-4 py-3">
                  <span className="mr-2 font-semibold text-gray-600 sm:hidden">
                    Photo:
                  </span>
                  <span
                    className={
                      user.photoStatus === "Uploaded"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {user.photoStatus}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    onClick={() => setSelectedUser(user)}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col items-center justify-between mt-4 sm:flex-row">
          <p className="mb-2 text-xs text-gray-500 sm:text-sm sm:mb-0">
            Showing {indexOfFirstUser + 1} to{" "}
            {Math.min(indexOfLastUser, filteredUsers.length)} out of{" "}
            {filteredUsers.length} entries
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-2 py-1 text-xs text-gray-600 transition-colors bg-gray-200 rounded-full sm:px-4 sm:py-2 sm:text-sm disabled:opacity-50 hover:bg-gray-300"
            >
              Previous
            </button>
            <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full sm:w-10 sm:h-10">
              <span className="text-xs font-bold text-white sm:text-sm">
                {currentPage}
              </span>
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
              }
              disabled={currentPage === pageNumbers.length}
              className="px-2 py-1 text-xs text-gray-600 transition-colors bg-gray-200 rounded-full sm:px-4 sm:py-2 sm:text-sm disabled:opacity-50 hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modal for viewing user details */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full sm:w-[30rem] max-w-[90vw] sm:max-w-none">
            <div className="border-b-[3px] flex border-black pb-2">
              <div className="flex">
                <button
                  onClick={() => setSelectedUser(null)}
                  className="left-0 z-20 text-black"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>
              <h2 className="text-lg sm:text-xl flex justify-center text-black ml-[8vh] font-semibold">
                FACE DATA
              </h2>
            </div>
            <div className="mt-5 space-y-4">
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full sm:w-24 sm:h-24">
                  <User
                    size={40}
                    className="text-gray-400"
                  />
                </div>
              </div>
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-2 sm:px-4">
                <h1 className="text-sm text-black sm:text-base">User</h1>
                <p className="text-sm text-black sm:text-base">
                  {selectedUser.email}
                </p>
              </div>
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-2 sm:px-4">
                <h1 className="text-sm text-black sm:text-base">Division</h1>
                <p className="text-sm text-black sm:text-base">
                  {selectedUser.division}
                </p>
              </div>
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-2 sm:px-4">
                <h1 className="text-sm text-black sm:text-base">Photo</h1>
                <p
                  className={`text-sm sm:text-base ${
                    selectedUser.photoStatus === "Uploaded"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedUser.photoStatus}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaceData;
