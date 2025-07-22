// components/TaskSaveButton.jsx
import React from "react";

function TaskSaveButton({
  onClick,
  disabled = false,
  label = "💾 Save Changes",
}) {
  return (
    <button
      type="submit"
      className="btn btn-outline-success"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default TaskSaveButton;