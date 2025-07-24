import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import "./assets/styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import TaskyModelButton from "./components/TaskyModalButton";
import TaskModal from "./components/TaskModel";
import TaskLists from "./components/TaskLists";
import TaskEdit from "./components/TaskEdit";
import TaskSearch from "./components/TaskSearch";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // default to dark mode

  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editTask, setEditTask] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTask = (newTask) => {
    setTaskList((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditClick = (task) => {
    setEditTask(task);
  };

  const handleUpdatedTask = (updatedTask) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditTask(null);
  };

  const handleClearTasks = () => {
    console.log("Clear tasks clicked");
    setTaskList([]);
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-dark text-white" : "bg-light text-dark"
        }`}
        style={{ minHeight: "100vh", padding: "0 0.5rem" }}
      >
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <div className="container py-4">
          <TaskSearch onSearch={setSearchQuery} isDarkMode={isDarkMode} />

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
              isDarkMode={isDarkMode}
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
              isDarkMode={isDarkMode}
            />
          )}

          {/* Task List */}
          <TaskLists
            tasks={taskList.filter((task) => {
              const query = searchQuery.toLowerCase();
              return (
                task.title.toLowerCase().includes(query) ||
                task.category.toLowerCase().includes(query)
              );
            })}
            onDeleteTask={handleDeleteTask}
            onEditClick={handleEditClick}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </>
  );
}

export default App;