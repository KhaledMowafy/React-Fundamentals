import React from 'react'
import { MdModeEdit } from "react-icons/md";
type Iprops = {
    title:string,
    message:string,
    
}
function TodoAction({title, message}: Iprops) {
  return (
  <>
    <div className="bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] mb-5 p-5 rounded">
        <div className="flex justify-between">
        <h1 className="text-lg font-bold">{title}</h1>
        <MdModeEdit role={'button'} />
        </div>
        <p>{message}</p>
    </div>
  </>
  )
}

export default TodoAction
