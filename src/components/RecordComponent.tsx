import { Link } from "react-router-dom";

type RecordComponentProps = {
  month: string;
  year: string;
  id: string;
};

const RecordComponent = ({ month, year, id }: RecordComponentProps) => {
  return (
    <div className="flex w-full p-10 border-b-2">
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
        <h2 className="mb-5">
          {month} {year}
        </h2>
        <div>
          <Link
            to={`/input-record?id=${id}`}
            className="px-3 py-[0.7rem] mr-5 text-white transition-all bg-blue-800 rounded-lg hover:bg-blue-900 active:scale-[0.95]"
          >
            Edit Record
          </Link>
          <Link
            to={`/input-report?id=${id}`}
            className="px-3 py-[0.7rem] mr-5 text-white transition-all bg-blue-800 rounded-lg hover:bg-blue-900 active:scale-[0.95]"
          >
            Generate Report
          </Link>
          <Link
            to="#"
            className="px-3 py-[0.7rem] text-white transition-all bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900 active:scale-[0.95]"
          >
            Delete Record
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecordComponent;
