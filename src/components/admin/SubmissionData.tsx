import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ArrowLeft, Search, ChevronDown, ChevronUp} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

const SubmissionTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [divisionFilter, setDivisionFilter] = useState<string>("ALL");
  const [submissionFilter, setSubmissionFilter] = useState<string>("ALL");
  const [isSubmissionDropdownOpen, setIsSubmissionDropdownOpen] =
    useState(false);
  const [isDivisionDropdownOpen, setIsDivisionDropdownOpen] = useState(false);
  const [isApprovalDialogOpen, setIsApprovalDialogOpen] = useState(false);
  const [, setSelectedSubmission] = useState<any>(null);
  const navigate = useNavigate();

  const submissionData = [
    {
      id: 1,
      name: "Kinan Doe",
      email: "KinanDoe@gmail.com",
      division: "Pemasaran",
      phone: "085555555555",
      date: "26 August 2024",
      submission: "Sick",
      status: "Pending",
    },
    {
      id: 2,
      name: "Abbysa",
      email: "AbbysaO0@gmail.com",
      division: "Produksi",
      phone: "0834322444",
      date: "23 August 2024",
      submission: "Sick",
      status: "Pending",
    },
    {
      id: 3,
      name: "Username",
      email: "Username@gmail.com",
      division: "Humas",
      phone: "0876543213",
      date: "19 August 2024",
      submission: "Duty",
      status: "Pending",
    },
    {
      id: 4,
      name: "Aldi Manuel",
      email: "Manuelaldi@gmail.com",
      division: "Umum",
      phone: "0899994444",
      date: "10 August 2024",
      submission: "Office Duty",
      status: "Pending",
    },
    {
      id: 5,
      name: "Bilal",
      email: "Bilalbilal@gmail.com",
      division: "Keuangan",
      phone: "0854545454",
      date: "1 August 2024",
      submission: "Office Duty",
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
      submission: "On Leave",
      status: "Pending",
    },
    {
      id: 10,
      name: "Kadeen",
      email: "Kadeen76@gmail.com",
      division: "Division - Position",
      phone: "0809876543",
      date: "15 July 2024",
      submission: "On Leave",
      status: "Pending",
    },
  ];

  const filteredData = submissionData.filter(
    (item) =>
      (submissionFilter === "ALL" || item.submission === submissionFilter) &&
      (divisionFilter === "ALL" || item.division === divisionFilter) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.division.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.submission.toLowerCase().includes(searchTerm.toLowerCase()))
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
          <div className="flex items-center mr-[80vh] bg-gray-200 rounded-2xl px-4 py-2 w-80">
            <Search className="text-[#979797]" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full ml-2 text-black bg-transparent outline-none"
            />
          </div>

          {/* Filter for Submission */}
          <div className="relative">
            <button
              onClick={() => setIsSubmissionDropdownOpen((prev) => !prev)}
              className="flex items-center px-4 py-2 text-gray-700 bg-white border-b border-gray-300 rounded-full"
            >
              {submissionFilter || "Filter Submission"}
              {isSubmissionDropdownOpen ? (
                <ChevronUp className="ml-2" />
              ) : (
                <ChevronDown className="ml-2" />
              )}
            </button>
            {isSubmissionDropdownOpen && (
              <div className="absolute right-0 z-10 w-48 mt-2 bg-white border-b border-gray-300 rounded-lg shadow-lg">
                {["Sick", "Duty", "On Leave", "Office Duty", "WFH", "ALL"].map(
                  (option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setSubmissionFilter(option);
                        setIsSubmissionDropdownOpen(false);
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

          {/* Filter for Division */}
          <div className="relative">
            <button
              onClick={() => setIsDivisionDropdownOpen((prev) => !prev)}
              className="flex items-center px-4 py-2 text-gray-700 bg-white border-b border-gray-300 rounded-full"
            >
              {divisionFilter || "Filter Division"}
              {isDivisionDropdownOpen ? (
                <ChevronUp className="ml-2" />
              ) : (
                <ChevronDown className="ml-2" />
              )}
            </button>
            {isDivisionDropdownOpen && (
              <div className="absolute right-0 z-10 w-48 mt-2 bg-white border-b border-gray-300 rounded-lg shadow-lg">
                {[
                  "Pemasaran",
                  "Produksi",
                  "Umum",
                  "Humas",
                  "Keuangan",
                  "ALL",
                ].map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setDivisionFilter(option);
                      setIsDivisionDropdownOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {option}
                  </div>
                ))}
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
                    item.status === "Approved" ? "bg-green-500" : "bg-blue-500"
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
          to {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length} results
        </div>
        <div className="flex space-x-2">
          {Array.from({length: pageCount}, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-full ${
                i + 1 === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Approval Dialog */}
      <Dialog.Root
        open={isApprovalDialogOpen}
        onOpenChange={setIsApprovalDialogOpen}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <Dialog.Content className="fixed inset-x-0 p-6 mx-auto bg-white rounded-lg top-1/3 w-96">
          <h2 className="mb-4 text-lg font-bold">Approve Submission</h2>
          <p>Do you want to approve this submission?</p>
          <div className="flex justify-end mt-6 space-x-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={handleDecline}
            >
              Decline
            </button>
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded"
              onClick={handleApprove}
            >
              Approve
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default SubmissionTable;
