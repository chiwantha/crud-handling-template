"use client";

import Image from "next/image";

const UserCard = ({ data, edit }) => {
  const { id, name, dob, sex, image, state } = data || {};

  return (
    <div className="p-4 bg-slate-50 shadow-md rounded-2xl flex items-center gap-4 hover:shadow-lg transition-all">
      <div
        className="relative w-16 h-16 rounded-full overflow-hidden 
      border-2 border-blue-500"
      >
        <Image
          src={`/uploads/inputtype/${image}`}
          alt={name}
          className=" object-cover grayscale-50"
          fill
          sizes="100px" // width of the parent container
        />
      </div>

      <div className="flex-1">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-sm text-gray-500">DOB: {dob}</p>
        <p className="text-sm text-gray-600">
          Gender: {sex === 0 ? "Male" : "Female"}
        </p>
        <p
          className={`text-sm font-medium ${
            state === 1 ? "text-green-600" : "text-red-600"
          }`}
        >
          {state === 1 ? "Active" : "Inactive"}
        </p>
      </div>

      <button
        onClick={edit}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition"
      >
        Edit
      </button>
    </div>
  );
};

export default UserCard;
