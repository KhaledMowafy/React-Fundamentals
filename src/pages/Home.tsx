import React, {useState} from "react";
import TodoColumn from "../components/todo-column/TodoColumn";
import TodoAction from "../components/todo-action/TodoAction";

type Iprops = {
  show: boolean;
};
function Home({ show }: Iprops) {
  const [notes, setNotes] = useState(()=>{
    if(localStorage.getItem('note')!==null){
      return JSON.parse(localStorage.getItem('note') || '{}')
    }
  })

  return (
    <div
      className={`mt-24 ${show ? "ml-72" : "ms-3"} transition-all duration-300`}
    >
      <div className="flex justify-around">
        <div className="w-3/12">
          <TodoColumn color="#dbeaff" icon="#4D96FF" title="To-Do">
            {notes.map((item: { title: string; message: string; status:string }, index:number)=>(
              item.status==='todo'?
              <TodoAction title={item.title} message={item.message} status={item.status} key={index}/>:''
            ))}
          </TodoColumn>
        </div>
        <div className="w-3/12">
          <TodoColumn color="#FFE3CD" icon="#FFA453" title="In Progress">
          {notes.map((item: { title: string; message: string; status:string }, index:number)=>(
              item.status==='progress'?
              <TodoAction title={item.title} message={item.message} status={item.status} key={index}/>:''
            ))}
            </TodoColumn>
        </div>
        <div className="w-3/12">
          <TodoColumn color="#D8F3DC" icon="#6CCB78" title="Complete">
          {notes.map((item: { title: string; message: string; status:string }, index:number)=>(
              item.status==='completed'?
              <TodoAction title={item.title} message={item.message} status={item.status} key={index}/>:''
            ))}
          </TodoColumn>
        </div>
      </div>
    </div>
  );
}

export default Home;
