import { Link } from "react-router-dom";

const RecordComponent = () => {
  return (
    <div className="flex p-10 border-b-2">
      <div className="w-[20%] flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
        >
          <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z" />
        </svg>
      </div>
      <div className="w-[80%]">
        <h2 className="mb-5">July 2025</h2>
        <div>
          <Link
            to="/input-record?id=123"
            className="px-3 py-[0.7rem] mr-5 text-white transition-all bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900 active:scale-[0.95]"
          >
            Edit Report
          </Link>
          <button className="px-3 py-2 mr-5 text-white transition-all bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900 active:scale-[0.95]">
            Delete Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordComponent;
