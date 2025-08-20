type Record = {
  date: string;
  minister: string;
  attendance: number;
};

// FUNCTION FOR ADDING MORE RECORD INPUT FIELDS
export const addRecordField = (
  records: { date: string; minister: string; attendance: number }[],
  setRecords: React.Dispatch<React.SetStateAction<Record[]>>
) => {
  setRecords([...records, { date: "", minister: "", attendance: 0 }]);
};
