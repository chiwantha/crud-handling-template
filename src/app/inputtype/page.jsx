"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const InputTypeFile = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    file: null,
  });

  // Preview state
  const [preview, setPreview] = useState(null);

  // Handle text input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!formData.name || !formData.file) {
      toast.warning("Please enter name and select file");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("name", formData.name);
    uploadData.append("file", formData.file);

    try {
      const res = await fetch("http://localhost:3000/api/inputtype", {
        method: "POST",
        body: uploadData,
      });
      const data = await res.json();
      console.log(data);
      toast.success("Upload successful!");
    } catch (err) {
      console.error(err);
      toast.error("Upload failed!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center">Create Your Gallery</h1>

        {/* Image preview */}
        <div className="aspect-square w-96 h-96 rounded-lg shadow-lg border border-gray-400 flex items-center justify-center">
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="object-cover w-full h-full rounded-lg"
            />
          ) : (
            <span className="text-gray-400">No Image Selected</span>
          )}
        </div>

        {/* Inputs */}
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className="p-4 bg-gray-400 text-white rounded"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="file"
          onChange={handleFileChange}
          className="p-2 bg-gray-200 rounded"
        />

        <button
          onClick={handleSubmit}
          className="py-2 px-4 bg-green-500 text-white font-bold rounded-lg"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default InputTypeFile;
