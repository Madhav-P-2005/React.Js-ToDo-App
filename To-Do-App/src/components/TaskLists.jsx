import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import TaskDelete from "./TaskDelete";

const TaskLists = ({ tasks, onDeleteTask, onEditClick }) => {
  // Local handler just to pass the task ID
  const handleDelete = (id) => {
    onDeleteTask(id);
  };

  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">Your Tasks 📃</h1>
        <hr className="w-25 mx-auto border-3 border-primary" />
      </div>

      {/* Task List */}
      <div className="p-4 border border-2 rounded-4 shadow bg-light">
        {tasks.length === 0 ? (
          <div className="text-center text-muted py-5">
            <h3 className="fw-light">Nothing here... 😴</h3>
          </div>
        ) : (
          <div className="row">
            {tasks.map((task) => (
              <div key={task.id} className="col-md-6 mb-4">
                <div className="card shadow rounded-4 h-100 border-0">
                  {/* Optional Image */}
                  {task.image && (
                    <img
                      src={task.image}
                      className="card-img-top rounded-top-4"
                      alt={task.title || "Task image"}
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                  )}

                  {/* Card Body */}
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-primary">
                        {task.title || "Untitled Task"}
                      </h5>

                      <p className="card-text">
                        <strong>Category:</strong> {task.category}
                        <br />
                        {task.description && (
                          <>
                            <strong>Description:</strong> {task.description}
                            <br />
                          </>
                        )}
                        {task.date && (
                          <>
                            <strong>Date:</strong>{" "}
                            {isNaN(new Date(task.date).getTime())
                              ? "Invalid Date"
                              : new Date(task.date).toLocaleString("en-IN", {
                                  dateStyle: "medium",
                                  timeStyle: "short",
                                })}
                          </>
                        )}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex justify-content-end gap-3 mt-4">
                      <button
                        type="button"
                        className="btn btn-warning text-white px-3"
                        onClick={() => onEditClick(task)} // ✅ Opens Edit Modal
                      >
                        <FontAwesomeIcon icon={faPenToSquare} /> Edit
                      </button>

                      {/* Delete Button */}
                      <TaskDelete taskId={task.id} onDelete={handleDelete} />
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