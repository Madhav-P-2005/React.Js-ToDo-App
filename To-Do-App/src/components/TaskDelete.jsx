import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskDelete = ({ taskId, onDelete }) => {
  const handleClick = () => {
    if (window.confirm("Are you sure you want to delete this task? ")) {
      onDelete(taskId);
    }
  };

  return (
    <button type="button" className="btn btn-danger px-2" onClick={handleClick}>
      <FontAwesomeIcon icon="fa-solid fa-trash" /> Delete
    </button>
  );
};

export default TaskDelete;