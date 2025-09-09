import { removeRecordField } from "../functions/removeRecordField";
import BattleAxeRecordFieldComponent from "./BattleAxeRecordFieldComponent";
import { useAuthContext } from "../hooks/useAuthContext";
import type { recordFieldType } from "../types/recordFieldType";

type RecordFieldProps = {
  index: number;
  records: recordFieldType[];
  recordData: recordFieldType;
  setRecords: React.Dispatch<React.SetStateAction<recordFieldType[]>>;
};

const RecordFieldComponent = ({
  index,
  records,
  recordData,
  setRecords,
}: RecordFieldProps) => {
  const { unit } = useAuthContext();

  // HANDLE CHANGE FUNCTION
  const handleChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = e.target;

    const key: string = name.replace(/[0-9]/g, ""); // STRIPS OFF NUMBER

    const updatedRecords: recordFieldType[] = [...records];

    if (updatedRecords[index] && typeof updatedRecords[index] === "object") {
      updatedRecords[index] = {
        ...updatedRecords[index],
        [key]: value,
      };
    }

    setRecords(updatedRecords);
  };

  return (
    <div
      className={`flex flex-col items-center ${
        index !== records.length - 1 && "mb-10"
      }`}
    >
      {unit?.unitId === 1 && (
        <BattleAxeRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

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
