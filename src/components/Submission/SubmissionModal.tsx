import React, {useState} from "react";
import {ChevronLeft, Calendar} from "lucide-react";

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  selectedDay: number | null;
  checkInTime: string | null;
  checkOutTime: string | null;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({isOpen, onClose}) => {
  const [category, setCategory] = useState("");
  const [from, setFrom] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log({category, from, startDate, endDate, description});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-black bg-black bg-opacity-50">
      <div className="overflow-hidden bg-white rounded-lg w-96">
        {/* Header */}
        <div className="flex items-center p-4 bg-gray-100">
          <button
            onClick={onClose}
            className="mr-4"
          >
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-lg font-semibold">Submission</h2>
        </div>

        <div className="p-6 space-y-4">
          {/* Category Selection */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Category :
            </label>
            <select
              className="w-full p-2 text-gray-700 bg-white border rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option
                value=""
                disabled
              >
                Select a category
              </option>
              <option value="Sick">Sick</option>
              <option value="Permission">Permission</option>
              <option value="On Leave">On Leave</option>
              <option value="Duty">Duty</option>
              <option value="Work From Home">Work From Home</option>
            </select>
          </div>

          {/* From Input */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              From :
            </label>
            <input
              type="text"
              className="w-full p-2 text-black bg-white border rounded-md"
              placeholder="Name"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>

          {/* Date Range */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Start
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 pr-8 text-black bg-white border rounded-md"
                  placeholder="mm / dd / yyyy"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <Calendar
                  className="absolute text-gray-600 right-2 top-2"
                  size={20}
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                End
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 pr-8 text-black bg-white border rounded-md"
                  placeholder="mm / dd / yyyy"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <Calendar
                  className="absolute text-gray-600 right-2 top-2"
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* Description Textarea */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="w-full p-2 text-black bg-white border rounded-md"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description..."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Choose File
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionModal;
