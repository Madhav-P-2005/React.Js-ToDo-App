import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteWarningModal from "./DeleteWarningModal";

const TaskDelete = ({ taskId, onDelete }) => {
  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        className="btn btn-danger px-2"
        data-bs-toggle="modal"
        data-bs-target={`#DeleteWarningModal-${taskId}`} // Unique modal per task
      >
        <FontAwesomeIcon icon={faTrash} /> Delete
      </button>

      {/* Modal Component */}
      <DeleteWarningModal taskId={taskId} onDelete={onDelete} />
    </>
  );
};

export default TaskDelete;