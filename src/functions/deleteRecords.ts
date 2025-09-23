export const deleteRecords = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/records?id=${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const json = await res.json();

  console.log("This is the response: ", json);
};
