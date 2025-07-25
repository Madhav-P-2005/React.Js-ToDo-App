import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import TaskyModelButton from "./components/TaskyModalButton";
import TaskModal from "./components/TaskModal";
import TaskLists from "./components/TaskLists";
import TaskEdit from "./components/TaskEdit";
import TaskSearch from "./components/TaskSearch";
import Footer from "./components/Footer";

function App() {
  const loadFromLocalStorage = (key, defaultValue) => {
    try {
      const savedValue = localStorage.getItem(key);
      return savedValue ? JSON.parse(savedValue) : defaultValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return defaultValue;
    }
  };

  const saveToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(() =>
    loadFromLocalStorage("darkMode", false)
  );
  const [taskList, setTaskList] = useState(() =>
    loadFromLocalStorage("tasks", [])
  );
  const [editTask, setEditTask] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    saveToLocalStorage("darkMode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    saveToLocalStorage("tasks", taskList);
  }, [taskList]);

  const handleAddTask = (newTask) => {
    setTaskList((prev) => [...prev, { ...newTask, id: Date.now().toString() }]);
  };

  const handleDeleteTask = (id) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEditClick = (task) => {
    setEditTask(task);
  };

  const handleUpdatedTask = (updatedTask) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? { ...updatedTask } : task
      )
    );
    setEditTask(null);
  };

  const handleClearTasks = () => {
    const shouldClear = window.confirm(
      "Are you sure you want to clear all tasks?"
    );
    if (shouldClear) {
      setTaskList([]);
      localStorage.removeItem("tasks");
    }
  };

  return (
    <div
      className={`min-vh-100 d-flex flex-column ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="flex-grow-1">
        <div className="container py-4">
          <TaskSearch onSearch={setSearchQuery} isDarkMode={isDarkMode} />
          <TaskyModelButton
            onClearClick={handleClearTasks}
            onOpen={() => setShowCreateModal(true)}
            isDarkMode={isDarkMode}
          />
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
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
