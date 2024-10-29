import React, {useState, useEffect} from "react";
import {ChevronLeft, Search} from "lucide-react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import ConfirmationModal from "../layouts/ConfirmationModal"; // Import the modal
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface User {
  userID: number;
  name: string;
  email: string;
  password: string; // Add the password field if needed
}

const API_BASE_URL = "https://api-smart.curaweda.com"; // Adjust this to match your backend URL

const UserData: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [actionType, setActionType] = useState<"approve" | "reject" | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [userPassword, setUserPassword] = useState(""); // State for password input
  const usersPerPage = 10; // Set maximum items per page
  const navigate = useNavigate();

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const fetchPendingUsers = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      const response = await axios.get(`${API_BASE_URL}/api/accounts/pending`, {
        headers: {
          Authorization: `Bearer ${token}`, // Set token in Authorization header
        },
      });
      setUsers(response.data); // This will now include passwords
      setError(null);
    } catch (error) {
      toast.error("Failed to fetch pending users."); // Error notification
    } finally {
      setIsLoading(false);
    }
  };

  const handleAction = async (action: "approve" | "reject") => {
    if (selectedUserId === null) return; // Prevent action if no user is selected
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      const endpoint =
        action === "approve"
          ? `${API_BASE_URL}/api/accounts/${selectedUserId}/approve`
          : `${API_BASE_URL}/api/accounts/${selectedUserId}/reject`;

      await axios.put(
        endpoint,
        {action, password: userPassword}, // Send password with the action
        {
          headers: {
            Authorization: `Bearer ${token}`, // Set token in Authorization header
            "Content-Type": "application/json",
          },
        }
      );
      fetchPendingUsers(); // Refresh the list after action
      toast.success(`User ${action}d successfully!`); // Success notification
    } catch (error) {
      toast.error(`Failed to ${action} user.`); // Error notification
    }
    setIsModalOpen(false); // Close the modal
    setUserPassword(""); // Reset the password input
  };

  const openModal = (userId: number, action: "approve" | "reject") => {
    setSelectedUserId(userId);
    setActionType(action); // Set the action type for the modal
    setIsModalOpen(true);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="fixed w-full h-full mx-auto overflow-hidden text-black bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center">
          <ChevronLeft
            className="mr-2 cursor-pointer"
            onClick={() => navigate("/admin")}
          />
          <h1 className="text-xl font-semibold">USER REGISTER</h1>
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
      {error && <div className="p-4 text-red-500">{error}</div>}
      {isLoading ? (
        <div className="p-4">Loading pending users...</div>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">NAME</th>
              <th className="p-2 text-left">EMAIL</th>
              <th className="p-2 text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="p-4 text-center"
                >
                  No pending users found.
                </td>
              </tr>
            ) : (
              currentUsers.map((user, index) => (
                <tr
                  key={user.userID}
                  className="border-b"
                >
                  <td className="p-2">{index + 1 + indexOfFirstUser}</td>{" "}
                  {/* Display ID based on pagination */}
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">
                    <button
                      onClick={() => openModal(user.userID, "approve")}
                      className="px-3 py-1 mr-2 text-sm text-white bg-green-500 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => openModal(user.userID, "reject")}
                      className="px-3 py-1 text-sm text-white bg-red-500 rounded"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
      {/* Pagination Controls */}
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
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => handleAction(actionType!)} // Use the selected action type
      >
        <div className="p-4">
          <h3 className="mb-4 text-lg font-semibold">Confirm Action</h3>
          <p>To proceed with this action, please enter the user's password:</p>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 mt-2 border rounded"
          />
        </div>
      </ConfirmationModal>
      <ToastContainer /> {/* Toast Container */}
    </div>
  );
};

export default UserData;
