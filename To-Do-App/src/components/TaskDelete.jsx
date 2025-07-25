import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteWarningModal from "./DeleteWarningModal";


const TaskDelete = ({ taskId, isDarkMode, onDelete }) => {
  // Controls the visibility of the confirmation modal
  const [showWarning, setShowWarning] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`btn ${
          isDarkMode ? "btn-outline-danger" : "btn-danger"
        } px-3`}
        onClick={() => setShowWarning(true)}
      >
        <FontAwesomeIcon icon={faTrash} className="me-2" />
        Delete
      </button>

      {showWarning && (
        <DeleteWarningModal
          taskId={taskId}
          onDelete={onDelete}
          onClose={() => setShowWarning(false)}
          isDarkMode={isDarkMode}
        />
      )}
    </>
  );
};

export default TaskDelete;