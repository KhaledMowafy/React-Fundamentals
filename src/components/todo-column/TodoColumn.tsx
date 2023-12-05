import React from "react";
import { MdAdd } from "react-icons/md";
import PopupTodo from "../popup-todo/PopupTodo";

type Iprops = {
  color: string;
  icon: string;
  title: string;
  children?: React.ReactNode;
  setNotes: React.Dispatch<React.SetStateAction<object>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};


function TodoColumn({ color, icon, title, children, setNotes, showModal, setShowModal }: Iprops) {


  return (
    <>
        <PopupTodo showModal={showModal} setShowModal={setShowModal} setNotes={setNotes} TodoId="" TodoMessage="" TodoTitle="" TodoStatus=""/>
      <div
        className={` bg-[${color}] rounded-lg shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] w-full`}
      >
        <div className="flex justify-between items-center h-20 ms-3 me-3">
          <div className="flex items-center">
          <svg height="15" width="15">
            <circle cx="8" cy="8" r="4" strokeWidth="3" fill={`${icon}`} />
          </svg>
            <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <MdAdd  role={"button"} onClick={()=>setShowModal(true)}/>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="w-11/12">{children}</div>
        </div>
      </div>
    </>
  );
}

export default TodoColumn;
