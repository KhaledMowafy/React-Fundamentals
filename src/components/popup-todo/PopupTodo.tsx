import React, {useState} from "react";

type Iprops = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setNotes?: React.Dispatch<React.SetStateAction<object>>;
  TodoTitle:string;
  TodoMessage:string;
  TodoId:string;
  TodoStatus:string;
};


function PopupTodo({ showModal, setShowModal, setNotes, TodoTitle, TodoMessage, TodoId, TodoStatus }: Iprops) {

    // const [note, setNote] = useState()
    const [title, setTitle] = useState<string>(TodoTitle);
    const [message, setMessage] = useState<string>(TodoMessage);
    const [status, setStatus] = useState<string>(TodoStatus);
    const [id, setId] = useState<string>(TodoId);

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(e.target.value)
    }
    const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setStatus(e.target.value)
    }
    const handleId = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setId(e.target.value)
    }

    const submitNote = ()=>{
        if(TodoId!==''){
            const notes: Array<{title: string, message: string, status:string, id:string}> = JSON.parse(localStorage.getItem('note')||'{}')
            notes.map((item)=>{
                if(TodoId==item.id){
                    item.title=title,
                    item.message=message,
                    item.status=status
                }
               
            })
            if(setNotes){
                setNotes(notes)
            }
            localStorage.setItem('note', JSON.stringify(notes));
        }else{
        const newNote: { title: string, message: string, status: string, id:string }[] = [];

        if(localStorage.getItem('note')!==null){
           const newNote = JSON.parse(localStorage.getItem('note')||'{}')
            newNote.push({
                'title': title,
                'message': message,
                'status': status,
                'id': id
            })
            if(setNotes!==undefined){
            setNotes(newNote)
            localStorage.setItem('note', JSON.stringify(newNote));
        }
        }else{
            newNote.push({
                'title': title,
                'message': message,
                'status': status,
                'id': id
            })
            if(setNotes!==undefined){
            setNotes(newNote)
            localStorage.setItem('note', JSON.stringify(newNote));
            }
        }
    }
    }
  return (
    <div>
        
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <input
                    className="shadow appearance-none border rounded w-full mt-3 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full text-lg font-bold"
                    id="title"
                    type="text"
                    placeholder="Title"
                    onChange={handleTitle}
                    defaultValue={TodoTitle}
                  />
                   <input
                    className="shadow appearance-none border rounded w-full mt-3 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full text-lg font-bold w-2/6"
                    id="id"
                    type="text"
                    placeholder="Unique ID"
                    onChange={handleId}
                  />
                  <button
                    className="p-1 absolute top-0 right-2 z-[9999] text-black ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <textarea
                    id="message"
                    rows={5}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                    onChange={handleMessage}
                    defaultValue={TodoMessage}
                  ></textarea>
                </div>
                <div className="relative p-6 flex-auto">
                <select
                  id="status"
                  onChange={handleStatus}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option hidden>{TodoStatus!==''?TodoStatus:'Status'}</option>
                  <option value="todo">To-Do</option>
                  <option value="progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={submitNote}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default PopupTodo;
