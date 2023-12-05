import React, {useState} from 'react'
import { MdModeEdit } from "react-icons/md";
import PopupTodo from '../popup-todo/PopupTodo';
type Iprops = {
    title:string,
    message:string,
    id:string,
    status:string,
    notes: {
        title:string,
        message:string,
        status:string,
        
    }[],
    
}
function TodoAction({title, message, id, status}: Iprops) {
    const [showModal, setShowModal] = useState<boolean>(false);

  return (
  <>
    <PopupTodo showModal={showModal} setShowModal={setShowModal} TodoTitle={title} TodoMessage={message} TodoId={id} TodoStatus={status}/>

    <div className="bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] mb-5 p-5 rounded">
        <div className="flex justify-between">
        <h1 className="text-lg font-bold">{title}</h1>
        <MdModeEdit role={'button'} onClick={()=>setShowModal(true)}/>
        </div>
        <p>{message}</p>
    </div>
  </>
  )
}

export default TodoAction
