type Record = {
  date: string;
  minister: string;
  attendance: number;
};

export const removeRecordField = (
  records: {
    date: string;
    minister: string;
    attendance: number;
  }[],
  setRecords: React.Dispatch<React.SetStateAction<Record[]>>,
  index: number
) => {
  if (records.length !== 1) {
    const newRecordsArray = records.filter(
      (record: { date: string; minister: string; attendance: number }) =>
        records.indexOf(record) !== index
    );
    setRecords(newRecordsArray);
  }
};
