import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Search, ChevronDown, ChevronUp } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

interface Submission {
  id: number;
  name: string;
  email: string;
  division: string;
  phone: string;
  date: string;
  submission: string;
  status: string;
}

const SubmissionTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [submissionFilter, setSubmissionFilter] =
    useState<string>("Submission");
  const [divisionFilter, setDivisionFilter] = useState<string>("Division");
  const [isSubmissionDropdownOpen, setIsSubmissionDropdownOpen] =
    useState(false);
  const [isDivisionDropdownOpen, setIsDivisionDropdownOpen] = useState(false);
  const [isApprovalDialogOpen, setIsApprovalDialogOpen] = useState(false);
  const [, setSelectedSubmission] = useState<Submission | null>(null);
  const navigate = useNavigate();

  const submissionData: Submission[] = [
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
      (submissionFilter === "Submission" ||
        item.submission === submissionFilter) &&
      (divisionFilter === "Division" || item.division === divisionFilter) &&
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

  const handleApprovalClick = (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsApprovalDialogOpen(true);
  };

  const handleApprove = () => {
    setIsApprovalDialogOpen(false);
  };

  const handleDecline = () => {
    setIsApprovalDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] overflow-hidden py-8 px-4">
      {/* Header */}
      <div className="flex justify-between items-center ml-14 mb-2 border-b-[3px] py-[10px]">
        <button
          onClick={() => navigate("/admin")}
          className="absolute left-0 top-7 z-20 text-black border-b-[3px] py-[12px] px-5 -mt-6"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <h2 className="-mt-8 text-lg font-bold text-black">
          PERMISSION SUBMISSION
        </h2>
        <div className="flex items-center -mt-8 space-x-4">
          <div className="flex items-center w-full px-2 py-1 bg-gray-200 sm:px-4 sm:py-2 rounded-2xl sm:w-80">
            <Search className="text-[#979797] w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full ml-2 text-sm text-black bg-transparent outline-none sm:text-base"
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
              <div className="absolute right-0 z-10 w-48 mt-2 text-black bg-white border-b border-gray-300 rounded-lg shadow-lg">
                {[
                  "Submission",
                  "Sick",
                  "Duty",
                  "On Leave",
                  "Office Duty",
                  "WFH",
                ].map((option) => (
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
                ))}
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
              <div className="absolute right-0 z-10 w-48 mt-2 text-black bg-white border-b border-gray-300 rounded-lg shadow-lg">
                {[
                  "Division",
                  "Pemasaran",
                  "Produksi",
                  "Umum",
                  "Humas",
                  "Keuangan",
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

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse table-fixed">
          <thead>
            <tr className="bg-gray-200 border-b">
              <th className="w-12 px-4 py-2 font-semibold text-center text-gray-600">
                #
              </th>
              <th className="w-1/4 px-4 py-2 font-semibold text-left text-gray-600">
                USER
              </th>
              <th className="w-1/6 px-4 py-2 font-semibold text-left text-gray-600">
                DIVISION
              </th>
              <th className="w-1/6 px-4 py-2 font-semibold text-left text-gray-600">
                PHONE
              </th>
              <th className="w-1/6 px-4 py-2 font-semibold text-left text-gray-600">
                DATE
              </th>
              <th className="w-1/6 px-4 py-2 font-semibold text-left text-gray-600">
                SUBMISSION
              </th>
              <th className="w-32 px-4 py-2 font-semibold text-center text-gray-600">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-3 text-center text-black">{item.id}</td>
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-sm font-normal text-gray-900">
                    {item.email}
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-700">{item.division}</td>
                <td className="px-4 py-3 text-gray-700">{item.phone}</td>
                <td className="px-4 py-3 text-gray-700">{item.date}</td>
                <td className="px-4 py-3 text-gray-700">{item.submission}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    className={`px-3 py-1 rounded-full text-white ${
                      item.status === "Approved"
                        ? "bg-green-500"
                        : "bg-blue-500"
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
          <p className="text-sm text-gray-500">
            Showing{" "}
            {Math.min(
              (currentPage - 1) * itemsPerPage + 1,
              filteredData.length
            )}{" "}
            to {Math.min(currentPage * itemsPerPage, filteredData.length)} out
            of {filteredData.length} entries
          </p>
          <div className="flex space-x-2">
            {Array.from({ length: pageCount }, (_, i) => (
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
