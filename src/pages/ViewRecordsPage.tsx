import { useQuery } from "@tanstack/react-query";

import type { recordFieldType } from "../types/recordFieldType";

import NavbarComponent from "../components/NavbarComponent";
import RecordComponent from "../components/RecordComponent";

import { useAuthContext } from "../hooks/useAuthContext";
import { capitalizeFirstLetter } from "../functions/capitalizeFirstLetter";

type RecordDataType = {
  createdAt: string;
  month: string;
  records: recordFieldType[];
  updatedAt: string;
  year: string;
  _id: string;
};

const ViewRecordsPage = () => {
  const { unit } = useAuthContext();

  const { isPending, error, data } = useQuery({
    queryKey: ["viewRecordsPageData"],
    queryFn: () =>
      fetch("http://localhost:3000/api/records").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occured: " + error.message;

  return (
    <>
      <NavbarComponent />
      <div className="flex items-center justify-between mb-10">
        <div className="flex">
          <label
            htmlFor="my-drawer"
            className="flex items-center justify-center p-2 mr-5 text-white transition-all bg-blue-800 rounded-lg cursor-pointer drawer-button hover:bg-blue-900 active:scale-[0.95]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
            </svg>
          </label>
          <h1>All Records</h1>
        </div>

        <p>Unit: {unit?.unitName}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        {data.map((record: RecordDataType) => (
          <RecordComponent
            key={record._id}
            month={capitalizeFirstLetter(record.month)}
            year={record.year}
            id={record._id}
          />
        ))}
      </div>
    </>
  );
};

export default ViewRecordsPage;
