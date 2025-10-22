"use client";
import { useEffect, useState } from "react";
import TextInput from "../inputs/TextInput";

const UserFrom = ({ data }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    dob: "",
    sex: "",
    image: null,
    state: "",
  });

  useEffect(() => {
    setFormData({
      id: data?.id || "",
      name: data?.name || "",
      dob: data?.dob || "",
      sex: data?.sex || "",
      image: data?.image || "",
      state: data?.state || "",
    });
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TextInput label={`name`} value={formData.name} />
    </div>
  );
};

export default UserFrom;
