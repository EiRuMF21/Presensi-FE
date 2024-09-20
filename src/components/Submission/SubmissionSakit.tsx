import React, {useState} from "react";

interface User {
  name: string;
  email: string;
  position: string;
  phone: string;
  date: string;
  status: string;
}

const Sakit: React.FC = () => {
  const initialUsers: User[] = [
    {
      name: "Kinan Doe",
      email: "KinanDoe@gmail.com",
      position: "Position...",
      phone: "085555555555",
      date: "26 August 2024",
      status: "",
    },
    {
      name: "Abbysya",
      email: "Abbysya00@gmail.com",
      position: "Position...",
      phone: "08343224444",
      date: "23 August 2024",
      status: "",
    },
    {
      name: "Username",
      email: "Username@gmail.com",
      position: "Position...",
      phone: "0876543213",
      date: "19 August 2024",
      status: "",
    },
    {
      name: "Aldi Manuel",
      email: "Manuelaldi@gmail.com",
      position: "Position...",
      phone: "0899994444",
      date: "10 August 2024",
      status: "",
    },
    {
      name: "Bilal",
      email: "Bilalbilal@gmail.com",
      position: "Position...",
      phone: "0854545454",
      date: "1 August 2024",
      status: "",
    },
    {
      name: "Cyd Dabir",
      email: "DabirCyd@gmail.com",
      position: "Position...",
      phone: "0877655432",
      date: "29 July 2024",
      status: "",
    },
    {
      name: "Doe Kinan",
      email: "KinanDoe@gmail.com",
      position: "Position...",
      phone: "080093489",
      date: "23 July 2024",
      status: "",
    },
    {
      name: "Elzein",
      email: "Elzein123@gmail.com",
      position: "Position...",
      phone: "08112374689",
      date: "19 July 2024",
      status: "",
    },
    {
      name: "Ghana Hasan",
      email: "Hasan89@gmail.com",
      position: "Position...",
      phone: "0898635472",
      date: "15 July 2024",
      status: "",
    },
    {
      name: "Kadeen",
      email: "Kadeen76@gmail.com",
      position: "Position...",
      phone: "0809876543",
      date: "15 July 2024",
      status: "",
    },
  ];

  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleAccept = (index: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user, i) =>
        i === index ? {...user, status: "you accept the submission"} : user
      )
    );
  };

  const handleDecline = (index: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user, i) =>
        i === index ? {...user, status: "you decline the submission"} : user
      )
    );
  };

  const handleDetail = (user: User) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="w-full h-full mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <button className="text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="ml-4 text-2xl font-bold text-gray-800">
              SICK LEAVE REQUEST
            </h1>
          </div>
        </div>

        <table className="min-w-full bg-white">
          <thead className="bg-transparent">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                User
              </th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                Position
              </th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                Phone
              </th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                Submission
              </th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="text-sm font-light text-gray-600">
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                    <div className="ml-4">
                      <p className="font-bold text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3">{user.position}</td>
                <td className="px-6 py-3">{user.phone}</td>
                <td className="px-6 py-3">{user.date}</td>
                <td className="px-6 py-3">
                  {user.status ? (
                    <span className="italic text-gray-500">{user.status}</span>
                  ) : (
                    <div className="flex">
                      <button
                        className="px-4 py-1 text-white transition duration-150 bg-green-500 rounded-full hover:bg-green-600"
                        onClick={() => handleAccept(index)}
                      >
                        Accept
                      </button>
                      <button
                        className="px-4 py-1 ml-2 text-white transition duration-150 bg-red-500 rounded-full hover:bg-red-600"
                        onClick={() => handleDecline(index)}
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </td>
                <td className="px-6 py-3">
                  <button
                    className="px-4 py-1 text-white transition duration-150 bg-blue-500 rounded-full hover:bg-blue-600"
                    onClick={() => handleDetail(user)}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative p-6 px-10 bg-white rounded-lg shadow-md w-80">
            {/* Back Arrow and Submission Title */}
            <div className="flex items-center mb-6">
              <button className="text-gray-600">
                <a
                  href="/admin"
                  className="text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>
              </button>
              <h2 className="ml-4 text-xl font-bold text-gray-800">
                Submission
              </h2>
            </div>

            {/* Horizontal Line */}
            <hr className="mb-4 border-black" />

            {/* Category */}
            <div className="mb-4">
              <p className="text-gray-500">Category</p>
              <p className="font-semibold text-black">Permission</p>
            </div>

            {/* From */}
            <div className="mb-4">
              <p className="text-gray-500">From</p>
              <p className="font-semibold text-black">{selectedUser.name}</p>
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-gray-500">Description</p>
              <textarea
                className="w-full h-24 p-2 text-gray-800 border border-gray-300 rounded-md resize-none"
                placeholder="Description..."
              ></textarea>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sakit;