import React, { useState, useEffect } from "react";
import TodoColumn from "../components/todo-column/TodoColumn";
import TodoAction from "../components/todo-action/TodoAction";

type Iprops = {
  show: boolean;
};
function Home({ show }: Iprops) {
  const [notes, setNotes] = useState(() => {
    if (localStorage.getItem("note") !== null) {
      return JSON.parse(localStorage.getItem("note") || "{}");
    }
  });
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setAlert(true)
    const timeId = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [notes]);

  return (
    <div
      className={`mt-24 ${show ? "ml-72" : "ms-3"} transition-all duration-300`}
    >
      {alert ? (
        <div
          className="absolute top-0 right-0 z-[9999] bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
          role="alert"
        >
          <p className="font-bold">Success!</p>
          <p>Your Data has been saved!</p>
        </div>
      ) : (
        ""
      )}
      <div className="flex justify-around">
        <div className="w-3/12">
          <TodoColumn
            color="#dbeaff"
            icon="#4D96FF"
            title="To-Do"
            setNotes={setNotes}
          >
            {notes.map(
              (
                item: { title: string; message: string; status: string },
                index: number
              ) =>
                item.status === "todo" ? (
                  <TodoAction
                    title={item.title}
                    message={item.message}
                    key={index}
                  />
                ) : (
                  ""
                )
            )}
          </TodoColumn>
        </div>
        <div className="w-3/12">
          <TodoColumn
            color="#FFE3CD"
            icon="#FFA453"
            title="In Progress"
            setNotes={setNotes}
          >
            {notes.map(
              (
                item: { title: string; message: string; status: string },
                index: number
              ) =>
                item.status === "progress" ? (
                  <TodoAction
                    title={item.title}
                    message={item.message}
                    key={index}
                  />
                ) : (
                  ""
                )
            )}
          </TodoColumn>
        </div>
        <div className="w-3/12">
          <TodoColumn
            color="#D8F3DC"
            icon="#6CCB78"
            title="Complete"
            setNotes={setNotes}
          >
            {notes.map(
              (
                item: { title: string; message: string; status: string },
                index: number
              ) =>
                item.status === "completed" ? (
                  <TodoAction
                    title={item.title}
                    message={item.message}
                    key={index}
                  />
                ) : (
                  ""
                )
            )}
          </TodoColumn>
        </div>
      </div>
    </div>
  );
}

export default Home;
