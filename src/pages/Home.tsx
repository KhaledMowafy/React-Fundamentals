import React from "react";
import TodoColumn from "../components/todo-column/TodoColumn";

type Iprops = {
  show: boolean;
};
function Home({ show }: Iprops) {
  return (
    <div
      className={`mt-24 ${show ? "ml-72" : "ms-3"} transition-all duration-300`}
    >
      <div className="flex justify-around">
        <div className= "w-3/12">
            <TodoColumn color="#dbeaff" icon="#4D96FF" title="To-Do" />
        </div>
        <div className= "w-3/12">
            <TodoColumn color="#FFE3CD" icon="#FFA453" title="In Progress" />
        </div>
        <div className= "w-3/12">
            <TodoColumn color="#D8F3DC" icon="#6CCB78" title="Complete" />
        </div>
      </div>
    </div>
  );
}

export default Home;
