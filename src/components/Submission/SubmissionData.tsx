import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ArrowLeft, Search} from "lucide-react";

const SubmissionTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const submissionData = [
    {
      id: 1,
      name: "Kinan Doe",
      email: "KinanDoe@gmail.com",
      division: "Division - Position",
      phone: "0855555555",
      date: "26 August 2024",
      submission: "Sick",
    },
    {
      id: 2,
      name: "Abbysa",
      email: "AbbysaO0@gmail.com",
      division: "Division - Position",
      phone: "0834322444",
      date: "23 August 2024",
      submission: "Sick",
    },
    {
      id: 3,
      name: "Username",
      email: "Username@gmail.com",
      division: "Division - Position",
      phone: "0876543213",
      date: "19 August 2024",
      submission: "Duty",
    },
    {
      id: 4,
      name: "Aldi Manuel",
      email: "Manuelaldi@gmail.com",
      division: "Division - Position",
      phone: "0899994444",
      date: "10 August 2024",
      submission: "Office Duty",
    },
    {
      id: 5,
      name: "Bilal",
      email: "Bilalbilal@gmail.com",
      division: "Division - Position",
      phone: "0854545454",
      date: "1 August 2024",
      submission: "Sick",
    },
    {
      id: 6,
      name: "Cyd Dabir",
      email: "DabirCyd@gmail.com",
      division: "Division - Position",
      phone: "0877655432",
      date: "29 July 2024",
      submission: "WFH",
    },
    {
      id: 7,
      name: "Doe Kinan",
      email: "KinanDoe@gmail.com",
      division: "Division - Position",
      phone: "0800934489",
      date: "23 July 2024",
      submission: "WFH",
    },
    {
      id: 8,
      name: "Elzein",
      email: "Elzein123@gmail.com",
      division: "Division - Position",
      phone: "08112374689",
      date: "19 July 2024",
      submission: "WFH",
    },
    {
      id: 9,
      name: "Ghana Hasan",
      email: "Hasan89@gmail.com",
      division: "Division - Position",
      phone: "0898635472",
      date: "15 July 2024",
      submission: "Holiday",
    },
    {
      id: 10,
      name: "Kadeen",
      email: "Kadeen76@gmail.com",
      division: "Division - Position",
      phone: "0809876543",
      date: "15 July 2024",
      submission: "Holiday",
    },
  ];

  const filteredData = submissionData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const itemsPerPage = 10;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const submissionColors: {[key: string]: string} = {
    Sick: "bg-red-100 text-red-800",
    Duty: "bg-blue-100 text-blue-800",
    Holiday: "bg-yellow-100 text-yellow-800",
    "Office Duty": "bg-purple-100 text-purple-800",
    WFH: "bg-green-100 text-green-800",
  };

  return (
    <div className="min-h-screen text-black bg-gray-200">
      <div className="w-full h-full p-6 mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <ArrowLeft
              className="mr-2 cursor-pointer"
              onClick={() => navigate("/admin")}
            />
            <h1 className="text-3xl font-bold text-black">
              PERMISSION SUBMISSION
            </h1>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full md:w-80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-100">
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">USER</th>
                <th className="px-6 py-3 text-left">DIVISION</th>
                <th className="px-6 py-3 text-left">PHONE</th>
                <th className="px-6 py-3 text-left">DATE</th>
                <th className="px-6 py-3 text-left">SUBMISSION</th>
                <th className="px-6 py-3 text-left">ACTION</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-600">
              {currentItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="px-6 py-3 text-left whitespace-nowrap">
                    {item.id}
                  </td>
                  <td className="px-6 py-3 text-left">
                    <div>{item.name}</div>
                    <div className="text-xs text-gray-400">{item.email}</div>
                  </td>
                  <td className="px-6 py-3 text-left">{item.division}</td>
                  <td className="px-6 py-3 text-left">{item.phone}</td>
                  <td className="px-6 py-3 text-left">{item.date}</td>
                  <td className="px-6 py-3 text-left">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        submissionColors[item.submission]
                      }`}
                    >
                      {item.submission}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-left">
                    <button className="px-3 py-1 text-xs text-white bg-green-500 rounded-full hover:bg-green-600">
                      Approval
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div>
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, filteredData.length)} out of{" "}
            {filteredData.length} entries
          </div>
          <div className="flex">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-gray-700 bg-gray-200 rounded-l disabled:bg-gray-300"
            >
              Previous
            </button>
            {[...Array(pageCount)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageCount))
              }
              disabled={currentPage === pageCount}
              className="px-3 py-1 text-gray-700 bg-gray-200 rounded-r disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionTable;
