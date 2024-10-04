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
  {
    id: 6,
    name: "Cyd Dabir",
    email: "DabirCyd@gmail.com",
    division: "Division - Position",
    photoStatus: "Haven't scanned yet",
  },
  {
    id: 7,
    name: "Doe Kinan",
    email: "KinanDoe@gmail.com",
    division: "Division - Position",
    photoStatus: "Haven't scanned yet",
  },
  {
    id: 8,
    name: "Elzein",
    email: "Elzein123@gmail.com",
    division: "Division - Position",
    photoStatus: "Uploaded",
  },
  {
    id: 9,
    name: "Ghana Hasan",
    email: "Hasan89@gmail.com",
    division: "Division - Position",
    photoStatus: "Uploaded",
  },
  {
    id: 10,
    name: "Kadeen",
    email: "Kadeen76@gmail.com",
    division: "Division - Position",
    photoStatus: "Haven't scanned yet",
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
    <div className="min-h-screen bg-[#FFFFFF] py-2 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-2 border-b-[3px] py-[10px]">
        <button
          onClick={handleBack}
          className="text-black py-[12px] px-5"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <h2 className="text-lg font-bold text-black">FACE DATA</h2>
        <div className="flex justify-center flex-1">
          <div className="flex items-center px-4 py-2 bg-gray-200 rounded-2xl w-80">
            <Search className="text-[#979797]" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full ml-2 text-black bg-transparent outline-none"
            />
          </div>
        </div>
        <select
          className="px-4 py-2 text-sm text-black bg-white border border-gray-300 rounded-full"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="ALL">SCANNING ALL</option>
          <option value="COMPLETE">COMPLETE</option>
          <option value="HAVEN'T">HAVEN'T</option>
        </select>
      </div>

      {/* Table and rest of the component remain unchanged */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse table-fixed">
          <thead>
            <tr className="bg-[#FFFFFF]">
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
                <td className="px-4 py-3 text-gray-700">{user.division}</td>
                <td className="px-4 py-3">
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

      {/* Modal for viewing user details */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[30rem] px-14">
            <div className="border-b-[3px] flex border-black pb-2">
              <div className="flex">
                <button
                  onClick={() => setSelectedUser(null)}
                  className="left-0 z-20 text-black"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              </div>
              <h2 className="text-xl flex justify-center text-black ml-[8vh] font-semibold">
                FACE DATA
              </h2>
            </div>
            <div className="mt-5 space-y-4">
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full">
                  <User
                    size={48}
                    className="text-gray-400"
                  />
                </div>
              </div>
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">User</h1>
                <p className="text-black">{selectedUser.email}</p>
              </div>
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">Division</h1>
                <p className="text-black">{selectedUser.division}</p>
              </div>
              <div className="flex justify-between border-b-[3px] pb-2 border-[#D9D9D9] px-4">
                <h1 className="text-black">Photo</h1>
                <p
                  className={
                    selectedUser.photoStatus === "Uploaded"
                      ? "text-green-600"
                      : "text-red-600"
                  }
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
