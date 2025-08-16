import { removeRecordField } from "../functions/removeRecordField";

type Record = {
  date: string;
  minister: string;
  attendance: number;
};

type recordFieldProps = {
  index: number;
  records: { date: string; minister: string; attendance: number }[];
  recordData: { date: string; minister: string; attendance: number };
  setRecords: React.Dispatch<React.SetStateAction<Record[]>>;
};

const RecordFieldComponent = ({
  index,
  records,
  recordData,
  setRecords,
}: recordFieldProps) => {
  const handleChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = e.target;

    const key: string = name.replace(/[0-9]/g, ""); // STRIPS OFF NUMBER

    const updatedRecords: {
      date: string;
      minister: string;
      attendance: number;
    }[] = [...records];

    updatedRecords[index] = {
      ...updatedRecords[index],
      [key]: value,
    };

    setRecords(updatedRecords);
  };

  return (
    <div
      className={`flex flex-col items-center ${
        index !== records.length - 1 && "mb-10"
      }`}
    >
      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor={`date${index + 1}`} className="w-1/2 text-xs">
          Date:
        </label>
        <input
          type="date"
          placeholder="Select a date..."
          id={`date${index + 1}`}
          name={`date${index + 1}`}
          value={recordData.date}
          onChange={handleChange}
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor={`minister${index + 1}`} className="w-1/2 text-xs">
          Minister:
        </label>
        <input
          type="text"
          placeholder="Enter minister's name..."
          id={`minister${index + 1}`}
          name={`minister${index + 1}`}
          value={recordData.minister}
          onChange={handleChange}
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor={`attendance${index + 1}`} className="w-1/2 text-xs">
          Attendance:
        </label>
        <input
          type="number"
          placeholder="Enter attendance figure..."
          id={`attendance${index + 1}`}
          name={`attendance${index + 1}`}
          value={recordData.attendance}
          onChange={handleChange}
          min="0"
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <button
        className="inline px-3 py-2 text-white transition-all bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900 active:scale-[0.95]"
        type="button"
        onClick={() => removeRecordField(records, setRecords, index)}
      >
        Remove record
      </button>
    </div>
  );
};

export default RecordFieldComponent;
