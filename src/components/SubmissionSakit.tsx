import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  position: string;
  phone: string;
  date: string;
  status: string;
}

const App: React.FC = () => {
  const initialUsers: User[] = [
    { name: 'Kinan Doe', email: 'KinanDoe@gmail.com', position: 'Position...', phone: '085555555555', date: '26 August 2024', status: '' },
    { name: 'Abbysya', email: 'Abbysya00@gmail.com', position: 'Position...', phone: '08343224444', date: '23 August 2024', status: '' },
    { name: 'Username', email: 'Username@gmail.com', position: 'Position...', phone: '0876543213', date: '19 August 2024', status: '' },
    { name: 'Aldi Manuel', email: 'Manuelaldi@gmail.com', position: 'Position...', phone: '0899994444', date: '10 August 2024', status: '' },
    { name: 'Bilal', email: 'Bilalbilal@gmail.com', position: 'Position...', phone: '0854545454', date: '1 August 2024', status: '' },
    { name: 'Cyd Dabir', email: 'DabirCyd@gmail.com', position: 'Position...', phone: '0877655432', date: '29 July 2024', status: '' },
    { name: 'Doe Kinan', email: 'KinanDoe@gmail.com', position: 'Position...', phone: '080093489', date: '23 July 2024', status: '' },
    { name: 'Elzein', email: 'Elzein123@gmail.com', position: 'Position...', phone: '08112374689', date: '19 July 2024', status: '' },
    { name: 'Ghana Hasan', email: 'Hasan89@gmail.com', position: 'Position...', phone: '0898635472', date: '15 July 2024', status: '' },
    { name: 'Kadeen', email: 'Kadeen76@gmail.com', position: 'Position...', phone: '0809876543', date: '15 July 2024', status: '' },
  ];

  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleAccept = (index: number) => {
    setUsers(prevUsers =>
      prevUsers.map((user, i) =>
        i === index ? { ...user, status: 'you accept the submission' } : user
      )
    );
  };

  const handleDecline = (index: number) => {
    setUsers(prevUsers =>
      prevUsers.map((user, i) =>
        i === index ? { ...user, status: 'you decline the submission' } : user
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
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="ml-4 text-2xl font-bold text-gray-800">SICK LEAVE REQUEST</h1>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase">Submission</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {users.map((user, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-gray-400 rounded-full w-10 h-10"></div>
                      <div className="ml-4">
                        <p className="font-bold text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6">
                    {user.position}
                  </td>
                  <td className="py-3 px-6">
                    {user.phone}
                  </td>
                  <td className="py-3 px-6">
                    {user.date}
                  </td>
                  <td className="py-3 px-6">
                    {user.status ? (
                      <span className="text-gray-500 italic">{user.status}</span>
                    ) : (
                      <div className="flex">
                        <button
                          className="px-4 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-150"
                          onClick={() => handleAccept(index)}
                        >
                          Accept
                        </button>
                        <button
                          className="ml-2 px-4 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-150"
                          onClick={() => handleDecline(index)}
                        >
                          Decline
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-6">
                    <button
                      className="px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-150"
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
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 relative">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
            <p className='text-black'><strong>Name:</strong> {selectedUser.name}</p>
            <p className='text-black'><strong>Email:</strong> {selectedUser.email}</p>
            <p className='text-black'><strong>Position:</strong> {selectedUser.position}</p>
            <p className='text-black'><strong>Phone:</strong> {selectedUser.phone}</p>
            <p className='text-black'><strong>Date:</strong> {selectedUser.date}</p>
            <p className='text-black'><strong>Status:</strong> {selectedUser.status || 'Pending'}</p>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
