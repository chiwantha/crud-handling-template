import ActionBtn from "@/components/btn/ActionBtn";
import { cloneElement, isValidElement } from "react";

const ActionTray = ({ state, form, data, close }) => {
  const { name } = data || {};

  const injectedForm = isValidElement(form)
    ? cloneElement(form, { data: data })
    : form;
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[50%] p-4 gap-4
         bg-gray-200 flex flex-col transition-all duration-300
         ${
           state
             ? `-translate-x-0 shadow-md border-l-2 border-blue-500
          `
             : `translate-x-full`
         }`}
    >
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">{name}</div>
        <ActionBtn
          click={() => {
            close(false);
          }}
          title={`X`}
        />
      </div>
      <div className="">{JSON.stringify(data)}</div>
      <div className="">
        {form ? injectedForm : <span>No Form Added !</span>}
      </div>
    </div>
  );
};

export default ActionTray;
