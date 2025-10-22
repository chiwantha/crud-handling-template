import Link from "next/link";
import React from "react";

const ways = [
  { title: "File Upload", path: `/inputtype` },
  { title: "Crud Page", path: `/crud` },
];

const HomePage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex gap-4">
        {ways.map((pathL, index) => (
          <Link
            key={index}
            href={pathL.path}
            className="rounded-lg w-42 h-42 aspect-square flex items-center
             justify-center border border-slate-400 p-4 text-center
             bg-gray-200 font-bold hover:scale-105 transition-transform
             duration-300"
          >
            {pathL.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
