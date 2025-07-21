import { useState } from "react";
import Navbar from "./components/Navbar";
import "./assets/styles/main.scss";
import TaskyModelButton from "./components/TaskyModalButton";
import TaskModal from "./components/TaskModel";
import TaskLists from "./components/TaskLists";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const [showModel , setShowModal] = useState(false);

  const [modalMode , setModalMode] = useState("create");

  const [editTask , setEditTask] = useState(null);

  const handleAddTask = (newTask) => {
    setTaskList((prev) => [...prev, newTask]);
  };


  const handleClearTasks = () => {
    console.log("clear tasks clicked");
  };

  const handleUpdatedTask = (updatedTask) => {
       setTaskList((prevTasks) =>task.id === updatedTask.id ? updatedTask : task)
  }


    const handleDeleteTask = (id) => {
      setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const handleEditClick = (task) => {
      setEditTask(task);
      setModalMode("edit");
      setShowModal(true);
    };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="container py-4">
        <h1>Welcome to My To-Do App 📝</h1>

        <div>
          <TaskyModelButton onClearClick={handleClearTasks}
          onOpen={() =>{
            setModalMode("create")
            setEditTask(null);
            setShowModal(true)
          }}
            />
        </div>

        <TaskModal show={showModel} 
        onClose={() => setShowModel(false)}
        mode={modalMode}
        taskToEdit={editTask}
         onTaskGenerate={handleAddTask}
         onSaveEdit={handleUpdatedTask}  />

        <TaskLists tasks={taskList} onDeleteTask={handleDeleteTask} onEditClick= {handleEditClick} />
      </div>
    </div>
  );
}

export default App;