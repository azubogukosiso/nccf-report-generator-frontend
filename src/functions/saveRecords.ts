export const saveRecords = (
  e: React.MouseEvent<HTMLButtonElement>,
  recordToSave: {
    records: { date: string; minister: string; attendance: number }[];
    month: string;
    year: string;
  }
) => {
  e.preventDefault();

  console.log("here we are: ", recordToSave);
};
