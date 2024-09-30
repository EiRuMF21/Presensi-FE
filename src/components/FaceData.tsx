import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  division: string;
  photoStatus: string;
}

const initialData: User[] = [
  { id: 1, name: 'Kinan Doe', email: 'KinanDoe@gmail.com', division: 'Division - Position', photoStatus: "Haven't scanned yet" },
  { id: 2, name: 'Abbysa', email: 'Abbysa00@gmail.com', division: 'Division - Position', photoStatus: 'Uploaded' },
  { id: 3, name: 'Username', email: 'Username@gmail.com', division: 'Division - Position', photoStatus: 'Uploaded' },
  { id: 4, name: 'Aldi Manuel', email: 'Manuelaldi@gmail.com', division: 'Division - Position', photoStatus: 'Uploaded' },
  { id: 5, name: 'Bilal', email: 'Bilalbilal@gmail.com', division: 'Division - Position', photoStatus: 'Uploaded' },
  { id: 6, name: 'Cyd Dabir', email: 'DabirCyd@gmail.com', division: 'Division - Position', photoStatus: "Haven't scanned yet" },
  { id: 7, name: 'Doe Kinan', email: 'KinanDoe@gmail.com', division: 'Division - Position', photoStatus: "Haven't scanned yet" },
  { id: 8, name: 'Elzein', email: 'Elzein123@gmail.com', division: 'Division - Position', photoStatus: 'Uploaded' },
  { id: 9, name: 'Ghana Hasan', email: 'Hasan89@gmail.com', division: 'Division - Position', photoStatus: 'Uploaded' },
  { id: 10, name: 'Kadeen', email: 'Kadeen76@gmail.com', division: 'Division - Position', photoStatus: "Haven't scanned yet" },
];

const Table: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('ALL');

  const filteredData = initialData.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === 'ALL' ||
      (filter === 'COMPLETE' && user.photoStatus === 'Uploaded') ||
      (filter === "HAVEN'T" && user.photoStatus === "Haven't scanned yet");

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-6 flex justify-between items-center border-b">
        <h2 className="text-2xl font-semibold tracking-wide">FACE DATA</h2>
        <div className="flex space-x-4 items-center">
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full px-4 py-2 text-sm w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Filter */}
          <select
            className="border border-gray-300 rounded-full px-4 py-2 text-sm"
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
      <table className="w-full text-left border-collapse mt-4">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-4 text-gray-600 text-sm font-medium">#</th>
            <th className="p-4 text-gray-600 text-sm font-medium">USER</th>
            <th className="p-4 text-gray-600 text-sm font-medium">DIVISION</th>
            <th className="p-4 text-gray-600 text-sm font-medium">PHOTO</th>
            <th className="p-4 text-gray-600 text-sm font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-4 text-gray-800">{user.id}</td>
              <td className="p-4">
                <p className="font-semibold text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </td>
              <td className="p-4 text-gray-800">{user.division}</td>
              <td className="p-4">
                {user.photoStatus === 'Uploaded' ? (
                  <span className="text-green-600 font-semibold">Uploaded</span>
                ) : (
                  <span className="text-red-600 font-semibold">Haven't scanned yet</span>
                )}
              </td>
              <td className="p-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition duration-200">Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center p-6">
        <span className="text-sm text-gray-600">Showing 10 out of {initialData.length} entries</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200 transition">Previous</button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200 transition"
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200 transition">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
