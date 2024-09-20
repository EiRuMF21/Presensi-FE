import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ArrowLeft, Search, ChevronDown, ChevronUp} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

const SubmissionTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<string>("ALL");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isApprovalDialogOpen, setIsApprovalDialogOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const navigate = useNavigate();

  const submissionData = [
    {
      id: 1,
      name: "Kinan Doe",
      email: "KinanDoe@gmail.com",
      division: "Division - Position",
      phone: "085555555555",
      date: "26 August 2024",
      submission: "Sick",
      status: "Pending",
    },
    {
      id: 2,
      name: "Abbysa",
      email: "AbbysaO0@gmail.com",
      division: "Division - Position",
      phone: "0834322444",
      date: "23 August 2024",
      submission: "Sick",
      status: "Pending",
    },
    {
      id: 3,
      name: "Username",
      email: "Username@gmail.com",
      division: "Division - Position",
      phone: "0876543213",
      date: "19 August 2024",
      submission: "Duty",
      status: "Pending",
    },
    {
      id: 4,
      name: "Aldi Manuel",
      email: "Manuelaldi@gmail.com",
      division: "Division - Position",
      phone: "0899994444",
      date: "10 August 2024",
      submission: "Office Duty",
      status: "Pending",
    },
    {
      id: 5,
      name: "Bilal",
      email: "Bilalbilal@gmail.com",
      division: "Division - Position",
      phone: "0854545454",
      date: "1 August 2024",
      submission: "Sick",
      status: "Pending",
    },
    {
      id: 6,
      name: "Cyd Dabir",
      email: "DabirCyd@gmail.com",
      division: "Division - Position",
      phone: "0877655432",
      date: "29 July 2024",
      submission: "WFH",
      status: "Pending",
    },
    {
      id: 7,
      name: "Doe Kinan",
      email: "KinanDoe@gmail.com",
      division: "Division - Position",
      phone: "0800934489",
      date: "23 July 2024",
      submission: "WFH",
      status: "Pending",
    },
    {
      id: 8,
      name: "Elzein",
      email: "Elzein123@gmail.com",
      division: "Division - Position",
      phone: "08112374689",
      date: "19 July 2024",
      submission: "WFH",
      status: "Pending",
    },
    {
      id: 9,
      name: "Ghana Hasan",
      email: "Hasan89@gmail.com",
      division: "Division - Position",
      phone: "0898635472",
      date: "15 July 2024",
      submission: "Holiday",
      status: "Pending",
    },
    {
      id: 10,
      name: "Kadeen",
      email: "Kadeen76@gmail.com",
      division: "Division - Position",
      phone: "0809876543",
      date: "15 July 2024",
      submission: "Holiday",
      status: "Pending",
    },
  ];

  const filteredData = submissionData.filter(
    (item) => filter === "ALL" || item.submission === filter
  );

  const itemsPerPage = 10;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleApprovalClick = (submission: any) => {
    setSelectedSubmission(submission);
    setIsApprovalDialogOpen(true);
  };

  const handleApprove = () => setIsApprovalDialogOpen(false);
  const handleDecline = () => setIsApprovalDialogOpen(false);

  return (
    <div className="fixed w-full h-full p-6 text-black bg-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <ArrowLeft
            className="mr-2 cursor-pointer"
            onClick={() => navigate("/admin")}
          />
          <h1 className="text-xl font-bold">PERMISSION SUBMISSION</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 bg-white border-b rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center px-4 py-2 text-gray-700 bg-white border-b border-gray-300 rounded-full"
            >
              {filter || "Filter"}
              {isDropdownOpen ? (
                <ChevronUp className="ml-2" />
              ) : (
                <ChevronDown className="ml-2" />
              )}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 z-10 w-48 mt-2 bg-white border-b border-gray-300 rounded-lg shadow-lg">
                {["Sick", "Duty", "Holiday", "Office Duty", "WFH", "ALL"].map(
                  (option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setFilter(option);
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {option}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <table className="w-full border-collapse rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">#</th>
            <th className="p-2 text-left">USER</th>
            <th className="p-2 text-left">DIVISION</th>
            <th className="p-2 text-left">PHONE</th>
            <th className="p-2 text-left">DATE</th>
            <th className="p-2 text-left">SUBMISSION</th>
            <th className="p-2 text-left">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr
              key={item.id}
              className="border-b"
            >
              <td className="p-2">{item.id}</td>
              <td className="p-2">
                <div>{item.name}</div>
                <div className="text-sm text-gray-500">{item.email}</div>
              </td>
              <td className="p-2">{item.division}</td>
              <td className="p-2">{item.phone}</td>
              <td className="p-2">{item.date}</td>
              <td className="p-2">{item.submission}</td>
              <td className="p-2">
                <button
                  className={`px-3 py-1 rounded-full text-white ${
                    item.status === "Approved" ? "bg-gray-500" : "bg-slate-500"
                  }`}
                  onClick={() => handleApprovalClick(item)}
                  disabled={item.status === "Approved"}
                >
                  {item.status === "Approved" ? "Approved" : "Approval"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4">
        <div>
          Showing{" "}
          {Math.min((currentPage - 1) * itemsPerPage + 1, filteredData.length)}{" "}
          - {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded"
          >
            Previous
          </button>
          {[...Array(pageCount)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-gray-200" : ""
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
            className="px-3 py-1 border rounded"
          >
            Next
          </button>
        </div>
      </div>

      <Dialog.Root
        open={isApprovalDialogOpen}
        onOpenChange={setIsApprovalDialogOpen}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Dialog.Content className="fixed p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Submission</h2>
            {selectedSubmission && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>From</div>
                  <div>{selectedSubmission.email}</div>
                  <div>Division</div>
                  <div>{selectedSubmission.division}</div>
                  <div>Phone</div>
                  <div>{selectedSubmission.phone}</div>
                  <div>Submission</div>
                  <div>{selectedSubmission.submission}</div>
                  <div>Date Start</div>
                  <div>{selectedSubmission.date}</div>
                  <div>Date End</div>
                  <div>{selectedSubmission.date}</div>
                </div>
                <div>
                  <label>Description...</label>
                  <textarea
                    className="w-full p-2 bg-white border rounded"
                    rows={3}
                  />
                </div>
              </div>
            )}
            <div className="flex justify-end mt-4 space-x-2">
              <button
                className="px-4 py-2 text-white bg-red-500 rounded"
                onClick={handleDecline}
              >
                Decline
              </button>
              <button
                className="px-4 py-2 text-white bg-green-500 rounded"
                onClick={handleApprove}
              >
                Approve
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default SubmissionTable;
