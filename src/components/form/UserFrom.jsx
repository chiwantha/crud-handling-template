"use client";
import { useEffect, useState } from "react";
import TextInput from "../inputs/TextInput";
import ImageInput from "../inputs/ImageInput";
import ActionBtn from "../btn/ActionBtn";
import { toast } from "react-toastify";

const UserForm = ({ data }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    dob: "",
    sex: "",
    image: "",
    state: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id || "",
        name: data.name || "",
        dob: data.dob || "",
        sex: data.sex || "",
        image: data.image || "",
        state: data.state || "",
      });
    }
  }, [data]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const { id, name, dob, image, sex } = formData;
    console.log(formData);
    if (name == "" || dob == "" || image == null || image == "") {
      toast.warning(`Missing Fields !`);
      return;
    }

    const uploadBody = new FormData();
    uploadBody.append("id", id ? id : "create");
    uploadBody.append("name", name);
    uploadBody.append("sex", sex === "" ? 0 : 1);
    uploadBody.append("dob", dob);
    uploadBody.append("image", image);

    try {
      const res = await fetch(`http://localhost:3000/api/crud`, {
        method: "POST",
        body: uploadBody,
      });

      if (!res.ok) {
        toast.error(`Response Not Okay`);
        return false;
      }

      toast.success(`Success`);
    } catch (err) {
      console.log(`Error Error : `, err);
      return false;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          label="Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e)}
        />
        <TextInput
          label="Date Of Birth"
          type="date"
          value={formData.dob}
          onChange={(e) => handleChange("dob", e)}
        />
        <TextInput
          label="Sex"
          type="select"
          options={[
            { value: "0", label: "Male" },
            { value: "1", label: "Female" },
          ]}
          value={formData.sex == 0 ? "0" : "1"}
          onChange={(e) => handleChange("sex", e)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span>Image Input</span>
        <ImageInput
          value={formData.image}
          onChange={(e) => handleChange("image", e)}
        />
      </div>
      <div className="flex">
        <ActionBtn click={handleSubmit} title={`Save`} />
      </div>
    </div>
  );
};

export default UserForm;
