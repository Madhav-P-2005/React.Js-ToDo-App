import { useState } from "react";
import Navbar from "./components/Navbar";
import "./assets/styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import TaskyModelButton from "./components/TaskyModalButton";
import TaskModal from "./components/TaskModel";
import TaskLists from "./components/TaskLists";
import TaskEdit from "./components/TaskEdit";
import TaskSearch from "./components/TaskSearch";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const [editTask, setEditTask] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);


  const [searchQuery, setSearchQuery] = useState("");


  // Add new task
  const handleAddTask = (newTask) => {
    setTaskList((prev) => [...prev, newTask]);
  };

  // Delete task
  const handleDeleteTask = (id) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Edit click - sets task to be edited
  const handleEditClick = (task) => {
    setEditTask(task);
  };

  // After editing is saved
  const handleUpdatedTask = (updatedTask) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditTask(null); // Close the edit modal
  };

  const handleClearTasks = () => {
    console.log("Clear tasks clicked");
    setTaskList([]);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="container py-4">
    
       <TaskSearch onSearch={setSearchQuery}/>

        {/* Add Task Button */}
        <TaskyModelButton
          onClearClick={handleClearTasks}
          onOpen={() => setShowCreateModal(true)}
        />

        {/* Create Modal */}
        {showCreateModal && (
          <TaskModal
            onTaskGenerate={(newTask) => {
              handleAddTask(newTask);
              setShowCreateModal(false);
            }}
            onClose={() => setShowCreateModal(false)}
          />
        )}

        {/* Edit Modal */}
        {editTask && (
          <TaskEdit
            task={editTask}
            onSave={(updatedTask) => {
              handleUpdatedTask(updatedTask);
              setEditTask(null);
            }}
            onCancel={() => setEditTask(null)}
          />
        )}

        {/* Task List and Search too */}
        <TaskLists
          tasks={taskList.filter((task) => {
            const query = searchQuery.toLowerCase();

            return(
              task.title.toLowerCase().includes(query) || 
              task.category.toLowerCase().includes(query)
            );
          })}
          onDeleteTask={handleDeleteTask}
          onEditClick={handleEditClick}
            
        />
      </div>
    </div>
  );
}

export default App;
