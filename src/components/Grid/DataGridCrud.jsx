"use client";

import { Children, cloneElement, isValidElement, useState } from "react";
import ActionTray from "../layout/actionTray/ActionTray";
import UserFrom from "../form/UserFrom";

const DataGridCrud = ({ children, formName }) => {
  const [trayOpen, setTrayOpen] = useState(false);
  const [trayProps, setTrayProps] = useState(null);

  const onEdit = (user) => {
    setTrayOpen(true);
    setTrayProps(user);
  };

  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child) && typeof child.type !== "string") {
      return cloneElement(child, {
        edit: () => onEdit(child.props.data), // ✅ Pass the user object
      });
    }
    return child;
  });

  const formComponent = formName === "user" ? <UserFrom /> : false;

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {enhancedChildren}
      </div>
      <ActionTray
        state={trayOpen}
        close={setTrayOpen}
        data={trayProps}
        form={formComponent}
      />
    </div>
  );
};

export default DataGridCrud;
