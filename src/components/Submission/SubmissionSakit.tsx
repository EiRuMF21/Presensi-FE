import React from 'react';

const SubmissionSakit: React.FC = () => {
  const users = [
    { name: 'Kinan Doe', email: 'KinanDoe@gmail.com', position: 'Position...', phone: '085555555555', date: '26 August 2024' },
    { name: 'Abbysya', email: 'Abbysya00@gmail.com', position: 'Position...', phone: '08343224444', date: '23 August 2024' },
    { name: 'Username', email: 'Username@gmail.com', position: 'Position...', phone: '0876543213', date: '19 August 2024' },
    { name: 'Aldi Manuel', email: 'Manuelaldi@gmail.com', position: 'Position...', phone: '0899994444', date: '10 August 2024' },
    { name: 'Bilal', email: 'Bilalbilal@gmail.com', position: 'Position...', phone: '0854545454', date: '1 August 2024' },
    { name: 'Cyd Dabir', email: 'DabirCyd@gmail.com', position: 'Position...', phone: '0877655432', date: '29 july 2024' },
    { name: 'Doe Kinan', email: 'KinanDoe@gmail.com', position: 'Position...', phone: '080093489', date: '23 july 2024' },
    { name: 'Elzein', email: 'Elzein123@gmail.com', position: 'Position...', phone: '08112374689', date: '19 july 2024' },
    { name: 'Ghana Hasan', email: 'Hasan89@gmail.com', position: 'Position...', phone: '0898635472', date: '15 july 2024' },
    { name: 'Kadeen', email: 'Kadeen76@gmail.com', position: 'Position...', phone: '0809876543', date: '15 july 2024' },
    // Add more users as needed
  ];

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-md shadow-lg w-full max-w-5xl">
        {/* Header */}
        <div className="bg-gray-200 p-4 rounded-t-md flex items-center space-x-2">
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl text-gray-800">SICK LEAVE REQUEST</h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">User</th>
                <th className="py-3 px-6 text-left">Position</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Submission</th>
                <th className="py-3 px-6 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {users.map((user, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-gray-400 rounded-full w-10 h-10"></div>
                      <div className="ml-4">
                        <p className="font-bold">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    {user.position}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {user.phone}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {user.date}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex">
                      <button className="px-4 py-1 bg-green-500 text-white rounded-full">Accept</button>
                      <button className="ml-2 px-4 py-1 bg-red-500 text-white rounded-full">Decline</button>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    information...
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubmissionSakit;
