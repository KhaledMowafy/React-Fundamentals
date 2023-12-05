import React from 'react'
type Iprops = {
    color:string,
    icon:string,
    title:string,
}
function TodoColumn({color, icon, title}: Iprops) {
  return (
   <>
    <div className={` bg-[${color}] rounded-lg shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] w-full`}>
         <div className="flex items-center h-20 ms-3">
          <svg height="15" width="15">
            <circle cx="8" cy="8" r="4" stroke-width="3" fill={`${icon}`} />
          </svg>
          <h1 className="text-xl font-bold">{title}</h1>
          </div>
        </div>
   </>
  )
}

export default TodoColumn
