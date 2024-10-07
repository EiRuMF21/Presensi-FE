import React, { useState } from "react";
import axios from "axios";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const initialUsers: User[] = [
  // Data pengguna sama seperti sebelumnya...
];

const UserData: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleAccept = async (id: number) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/accounts/approve/${id}`);
      console.log(response.data.message);
      alert("User Approved Successfully");

      // Optional: Update state to remove the accepted user from the list
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error approving user:", error);
      alert("Error approving user");
    }
  };

  const handleDecline = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/accounts/reject/${id}`);
      console.log(response.data.message);
      alert("User Rejected Successfully");

      // Optional: Update state to remove the declined user from the list
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error rejecting user:", error);
      alert("Error rejecting user");
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed w-full h-full mx-auto overflow-hidden text-black bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center">
          <ArrowLeft
            className="mr-2 cursor-pointer"
            onClick={() => navigate("/admin")}
          />
          <h1 className="text-xl font-semibold">USER REGISTRATION</h1>
        </div>
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
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">#</th>
            <th className="p-2 text-left">NAME</th>
            <th className="p-2 text-left">EMAIL</th>
            <th className="p-2 text-left">PASSWORD</th>
            <th className="p-2 text-left">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.password}</td>
              <td className="p-2">
                <button
                  onClick={() => handleAccept(user.id)}
                  className="px-3 py-1 mr-2 text-sm text-white bg-green-500 rounded"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDecline(user.id)}
                  className="px-3 py-1 text-sm text-white bg-red-500 rounded"
                >
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-500">
          Showing {filteredUsers.length} out of {users.length} entries
        </span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded">Previous</button>
          <button className="px-3 py-1 bg-gray-200 rounded">1</button>
          <button className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default UserData;
