import React from "react";

interface HistoryItemProps {
  date: string;
  location: string;
  timeRange: string;
  username: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({
  date,
  location,
  timeRange,
  username,
}) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4 shadow-lg">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">{timeRange}</span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <div className="mt-2 text-gray-700">
        <p>{location}</p>
        <p>{username}</p>
      </div>
    </div>
  );
};

const History: React.FC = () => {
  const historyData = [
    {
      date: "Senin, 12 Agustus 2024",
      location: "Buah Batu, Bandung",
      timeRange: "08.00 - 16.00",
      username: "Usernameeee",
    },
    {
      date: "Selasa, 13 Agustus 2024",
      location: "Buah Batu, Bandung",
      timeRange: "08.00 - 16.00",
      username: "Usernameeee",
    },
    {
      date: "Rabu, 14 Agustus 2024",
      location: "Buah Batu, Bandung",
      timeRange: "07.00 - 15.00",
      username: "Usernameeee",
    },
    {
      date: "Kamis, 15 Agustus 2024",
      location: "Buah Batu, Bandung",
      timeRange: "07.00 - 15.00",
      username: "Usernameeee",
    },
    {
      date: "Jum'at, 16 Agustus 2024",
      location: "Buah Batu, Bandung",
      timeRange: "08.00 - 16.00",
      username: "Usernameeee",
    },
    {
      date: "Sabtu, 17 Agustus 2024",
      location: "Buah Batu, Bandung",
      timeRange: "08.00 - 16.00",
      username: "Usernameeee",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">History</h1>
      <div className="w-full max-w-md">
        {historyData.map((item, index) => (
          <HistoryItem
            key={index}
            date={item.date}
            location={item.location}
            timeRange={item.timeRange}
            username={item.username}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
