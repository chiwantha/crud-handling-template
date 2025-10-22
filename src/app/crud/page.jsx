import UserCard from "@/components/card/UserCard";
import DataGridCrud from "@/components/Grid/DataGridCrud";
import React, { use } from "react";
import { toast } from "react-toastify";

async function getUsersList() {
  try {
    const res = await fetch(`http://localhost:3000/api/crud`);

    if (!res.ok) {
      toast.error(`Error Fetching Data !`);
      return { data: [] };
    }

    return res.json();
  } catch (err) {
    toast.error(`Error Fetching Data !`);
    return { data: [] };
  }
}

const CrudPage = async () => {
  const users = await getUsersList();

  return (
    <div className="flex flex-col gap-4">
      <span>Crud Page</span>
      <DataGridCrud>
        {users.data.map((user, index) => (
          <UserCard data={user} key={index} />
        ))}
      </DataGridCrud>
    </div>
  );
};

export default CrudPage;
