import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskDelete = ({ taskId, isDarkMode, onDelete }) => {
  return (
    <button
      type="button"
      className={`btn ${isDarkMode ? "btn-outline-danger" : "btn-danger"} px-3`}
      onClick={() => onDelete(taskId)} // ✅ fix here
    >
      <FontAwesomeIcon icon={faTrash} className="me-2" />
      Delete
    </button>
  );
};

export default TaskDelete;