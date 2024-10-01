import React, {useState} from "react";
import {ArrowLeft} from "lucide-react";
import {useNavigate} from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  position: string;
  division: string;
  remainingDaysOff: number;
  password: string;
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "Kinan Doe",
    email: "KinanDoe@gmail.com",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    password: "pas*****",
  },
  {
    id: 2,
    name: "Abbysa",
    email: "Abbysa00@gmail.com",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    password: "pas*****",
  },
  {
    id: 3,
    name: "Username",
    email: "Username@gmail.com",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    password: "pas*****",
  },
  {
    id: 4,
    name: "Aldi Manuel",
    email: "Manuelaldi@gmail.com",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    password: "pas*****",
  },
  {
    id: 5,
    name: "Bilal",
    email: "Bilalbilal@gmail.com",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    password: "pas*****",
  },
  {
    id: 6,
    name: "Cyd Dabir",
    email: "DabirCyd@gmail.com",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    password: "pas*****",
  },
  {
    id: 7,
    name: "Doe Kinan",
    email: "KinanDoe@gmail.com",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    password: "pas*****",
  },
  {
    id: 8,
    name: "Elzein",
    email: "Elzein123@gmail.com",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    password: "pas*****",
  },
  {
    id: 9,
    name: "Ghana Hasan",
    email: "Hasan89@gmail.com",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    password: "pas*****",
  },
  {
    id: 10,
    name: "Kadeen",
    email: "Kadeen76@gmail.com",
    position: "Position...",
    division: "Division...",
    remainingDaysOff: 12,
    password: "pas*****",
  },
];

const UserDataTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleView = (user: User) => {
    setSelectedUser(user); // Set selected user and open modal
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleCloseModal = () => {
    setSelectedUser(null); // Close modal
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-8 px-12">
      <ArrowLeft
        className="mr-2 cursor-pointer"
        onClick={() => navigate("/admin")}
      />
      <h1 className="mb-4 text-xl font-semibold">User Data</h1>
      <div className="overflow-x-auto">
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
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-b"
              >
                <td className="px-4 py-3 text-center">{index + 1}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
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
        <div className="mt-4 text-sm text-gray-500">
          <p>Showing {users.length} out of 45 entries</p>
        </div>
      </div>

      {/* Modal for editing user */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Change</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">User</label>
                <input
                  type="text"
                  value={selectedUser.name}
                  readOnly
                  className="w-full border-b border-gray-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={selectedUser.password}
                  readOnly
                  className="w-full border-b border-gray-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Position</label>
                <input
                  type="text"
                  value={selectedUser.position}
                  readOnly
                  className="w-full border-b border-gray-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Division</label>
                <input
                  type="text"
                  value={selectedUser.division}
                  readOnly
                  className="w-full border-b border-gray-300 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDataTable;
