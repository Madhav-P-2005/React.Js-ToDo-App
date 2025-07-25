import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import TaskDelete from "./TaskDelete";

const TaskLists = ({ tasks, onDeleteTask, onEditClick, isDarkMode }) => {
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = (id) => {
    setDeletingId(id);
    // Add a small delay for animation
    setTimeout(() => {
      onDeleteTask(id);
      setDeletingId(null);
    }, 150);
  };

  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">Your Task List 📝 </h1>
        <hr className="w-25 mx-auto border-3 border-primary" />
      </div>

      {/* Task List */}
      <div
        className={`p-4 rounded-4 ${
          isDarkMode ? "bg-dark bg-opacity-50" : "bg-light"
        }`}
      >
        {tasks.length === 0 ? (
          <div className="text-center py-5">
            <h3
              className={`fw-light ${
                isDarkMode ? "text-light-emphasis" : "text-muted"
              }`}
            >
              Nothing here... 😴
            </h3>
          </div>
        ) : (
          <div className="row g-5">
            {tasks.map((task) => (
              <div key={task.id} className="col-md-6">
                <div
                  className={`card h-100  shadow-lg ${
                    isDarkMode
                      ? "bg-dark bg-gradient text-white border-opacity-12   border border-white"
                      : "bg-white"
                  } ${deletingId === task.id ? "opacity" : ""}`}
                  style={{
                    transition: "all 0.3s ease",
                    transform:
                      deletingId === task.id ? "scale(0.98)" : "scale(1)",
                  }}
                >
                  {/* Optional Image */}
                  {task.image && (
                    <div className="position-relative">
                      <img
                        src={task.image}
                        className="card-img-top"
                        alt={task.title || "Task image"}
                        style={{
                          height: "200px",
                          objectFit: "cover",
                          borderBottom: isDarkMode
                            ? "1px solid rgba(255,255,255,0.1)"
                            : "1px solid rgba(0,0,0,0.1)",
                        }}
                      />
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="card-body d-flex flex-column justify-content-between p-4 ">
                    <div>
                      <h5
                        className={`card-title fw-bold mb-3 ${
                          isDarkMode ? "text-info" : "text-primary"
                        }`}
                      >
                        {task.title || "Untitled Task"}
                      </h5>

                      <div className="card-text">
                        <div
                          className={`mb-2 ${
                            isDarkMode ? "text-light" : "text-dark"
                          }`}
                        >
                          <strong className="text-primary">Category :- </strong>{" "}
                          {task.category}
                        </div>
                        {task.description && (
                          <div className="mb-2">
                            <strong className="text-primary">
                              Description :-
                            </strong>{" "}
                            {task.description}
                          </div>
                        )}
                        {task.date && (
                          <div
                            className={`mb-2 ${
                              isDarkMode ? "text-light" : "text-dark"
                            }`}
                          >
                            <strong className="text-primary">Date :- </strong>
                            <span
                              className={
                                isDarkMode ? "text-white" : "text-dark"
                              }
                            >
                              {isNaN(new Date(task.date).getTime())
                                ? "Invalid Date"
                                : new Date(task.date).toLocaleString("en-IN", {
                                    dateStyle: "medium",
                                    timeStyle: "short",
                                  })}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex justify-content-end gap-3 mt-4">
                      <button
                        type="button"
                        className={`btn ${
                          isDarkMode ? "btn-outline-info" : "btn-warning"
                        } px-3`}
                        onClick={() => onEditClick(task)}
                      >
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className="me-2"
                        />
                        Edit
                      </button>

                      {/* Delete Button */}
                      <TaskDelete
                        taskId={task.id}
                        onDelete={handleDelete}
                        isDarkMode={isDarkMode}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskLists;
