import React, {useState} from "react";

interface SubmissionModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  selectedDay: number | null;
  checkInTime: string | null;
  checkOutTime: string | null;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({
  isOpen,
  title,
  onClose,
  selectedDay,
}) => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log({category, description, selectedDay});
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500"
          >
            X
          </button>
        </div>

        {/* Category Selection */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 font-semibold">
            Category
          </label>
          <select
            className="w-full mt-1 p-2 border rounded"
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
            <option value="Holiday">Holiday</option>
            <option value="OfficeDuty">Office Duty</option>
            <option value="WorkFromHome">Work From Home</option>
          </select>
        </div>

        {/* From Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            From
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the start time"
          />
        </div>

        {/* Description Textarea */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 font-semibold">
            Description
          </label>
          <textarea
            className="w-full mt-1 p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your reason"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SubmissionModal;
