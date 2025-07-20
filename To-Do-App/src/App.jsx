import { useState } from "react";
import Navbar from "./components/Navbar";
import "./assets/styles/main.scss";
import TaskyModelButton from "./components/TaskyModalButton";
import TaskModal from "./components/TaskModel";
import TaskLists from "./components/TaskLists";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (newTask) => {
    setTaskList((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleClearTasks = () => {
    console.log("clear tasks clicked");
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="container py-4">
        <h1>Welcome to My To-Do App 📝</h1>

        <div>
          <TaskyModelButton onClearClick={handleClearTasks} />
        </div>

        <TaskModal onTaskGenerate={handleAddTask} />

        <TaskLists tasks={taskList} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;