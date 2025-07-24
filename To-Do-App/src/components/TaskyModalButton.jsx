import React from "react";

const TaskyModelButton = ({ onClearClick, onOpen }) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-3">
        <button
          className="btn btn-success"
          // data-bs-dismiss="modal"
          type="button"
          onClick={onOpen} // ✅ Use the passed prop
        >
          ➕ Add Tasks
        </button>
        <button className="btn btn-danger" type="button" onClick={onClearClick}>
          🗑️ Clear Tasks
        </button>
      </div>
    </div>
  );
};

export default TaskyModelButton;