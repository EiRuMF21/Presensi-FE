import {} from "react";

const SidebarAdmin: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] text-black h-screen w-64 p-4 rounded-2xl">
      <h2 className="text-black font-semibold text-lg mb-4">USER MANAGEMENT</h2>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full mb-4">
        <a className="text-white" href="../Submission/SubmissionCuti.tsx">
          User Data
        </a>
      </button>
      <h2 className="text-black font-semibold text-lg mb-4">SUBMISSION</h2>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full mb-4">
        <a className="text-white" href="/Submissionizin">
          Permission
        </a>
      </button>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full mb-4">
        <a className="text-white" href="/Submissionsakit">
          Sick
        </a>
      </button>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full mb-4">
        <a className="text-white" href="/Submissioncuti">
          Office Trip
        </a>
      </button>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full mb-4">
        <a className="text-white" href="/Submissionizin">
          Office Duty
        </a>
      </button>
      <button className="bg-[#29b6f6] text-white py-2 px-4 rounded w-full">
        <a className="text-white" href="/Recap">
          Recap
        </a>
      </button>
    </div>
  );
};

export default SidebarAdmin;
