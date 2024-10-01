import React, {useState} from "react";
import {ArrowLeft, User, X} from "lucide-react";
import {useNavigate} from "react-router-dom";

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

const Card: React.FC<{children: React.ReactNode; className?: string}> = ({
  children,
  className = "",
}) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>
);

const CardHeader: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div className="px-6 py-4 border-b">{children}</div>
);

const CardContent: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div className="px-6 py-4">{children}</div>
);

const DetailView: React.FC<{user: User; onClose: () => void}> = ({
  user,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">FACE DATA</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full">
                <User
                  size={48}
                  className="text-gray-400"
                />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">User</p>
              <p className="font-medium">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Division</p>
              <p className="font-medium">{user.division}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Photo</p>
              <p
                className={`font-medium ${
                  user.photoStatus === "Uploaded"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {user.photoStatus}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Table: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const filteredData = initialData.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "ALL" ||
      (filter === "COMPLETE" && user.photoStatus === "Uploaded") ||
      (filter === "HAVEN'T" && user.photoStatus === "Haven't scanned yet");

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="fixed w-full h-full mx-auto overflow-hidden text-black bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        {/* Tombol Kembali */}
        <div className="flex items-center space-x-4">
          <ArrowLeft
            className="mr-2 cursor-pointer"
            onClick={() => navigate("/admin")}
            size={24}
          />
          <h2 className="text-2xl font-semibold tracking-wide">FACE DATA</h2>
        </div>

        {/* Search dan Filter */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 text-sm bg-white border border-gray-300 rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full"
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
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-4 text-sm font-medium text-gray-600">#</th>
            <th className="p-4 text-sm font-medium text-gray-600">USER</th>
            <th className="p-4 text-sm font-medium text-gray-600">DIVISION</th>
            <th className="p-4 text-sm font-medium text-gray-600">PHOTO</th>
            <th className="p-4 text-sm font-medium text-gray-600"></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-4 text-gray-800">{user.id}</td>
              <td className="p-4">
                <p className="font-semibold text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </td>
              <td className="p-4 text-gray-800">{user.division}</td>
              <td className="p-4">
                {user.photoStatus === "Uploaded" ? (
                  <span className="font-semibold text-green-600">Uploaded</span>
                ) : (
                  <span className="font-semibold text-red-600">
                    Haven't scanned yet
                  </span>
                )}
              </td>
              <td className="p-4">
                <button
                  className="px-4 py-2 text-sm text-white transition duration-200 bg-blue-600 rounded-full hover:bg-blue-700"
                  onClick={() => setSelectedUser(user)}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between p-6">
        <span className="text-sm text-gray-600">
          Showing 10 out of {initialData.length} entries
        </span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm text-gray-700 transition border border-gray-300 rounded-full hover:bg-gray-200">
            Previous
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="px-3 py-1 text-sm text-gray-700 transition border border-gray-300 rounded-full hover:bg-gray-200"
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 text-sm text-gray-700 transition border border-gray-300 rounded-full hover:bg-gray-200">
            Next
          </button>
        </div>
      </div>

      {/* Popup Detail View */}
      {selectedUser && (
        <DetailView
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default Table;
