"use client";

const ActionBtn = ({ click, title }) => {
  return (
    <button
      onClick={click}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition"
    >
      {title}
    </button>
  );
};

export default ActionBtn;
