"use client";

import { Children, cloneElement, isValidElement } from "react";
import { toast } from "react-toastify";

const DataGridCrud = ({ children }) => {
  const onEdit = (user) => {
    toast.info(`Edit Clicked: ${user.name}`);
  };

  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child) && typeof child.type !== "string") {
      return cloneElement(child, {
        edit: () => onEdit(child.props.data), // ✅ Pass the user object
      });
    }
    return child;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
      {enhancedChildren}
    </div>
  );
};

export default DataGridCrud;
