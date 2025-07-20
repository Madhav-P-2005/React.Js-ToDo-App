import { useState } from "react";
import Navbar from "./components/Navbar";
import "./assets/styles/main.scss";
import TaskyModelButton from "./components/TaskyModalButton";
import TaskModal from "./components/TaskModel";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const [showModel , setShowModel] = useState(false);


  // const handleAddClick = () => setShowModel(true);

  // const handleCloseModel = () => setShowModel(false);

  const handleClearTasks = () =>{
    console.log("clear tasks clicked")
  }


  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="container py-4">
        <h1>Welcome to My To-Do App 📝</h1>
        <div>
          <TaskyModelButton onClearClick={handleClearTasks} />
        </div>

        <TaskModal />
      </div>
    </div>
  );
}

export default App;
