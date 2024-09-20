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
    <div className="fixed inset-0 z-50 flex items-center justify-center text-black bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg w-80">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-red-600"
          >
            X
          </button>
        </div>

        {/* Category Selection */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-black">
            Category
          </label>
          <select
            className="w-full p-2 mt-1 text-black bg-white border rounded"
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
          <label className="block mb-2 text-sm font-semibold text-black">
            From
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 leading-tight text-black bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Enter the start time"
          />
        </div>

        {/* Description Textarea */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-black">
            Description
          </label>
          <textarea
            className="w-full p-2 mt-1 text-black bg-white border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your reason"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SubmissionModal;
