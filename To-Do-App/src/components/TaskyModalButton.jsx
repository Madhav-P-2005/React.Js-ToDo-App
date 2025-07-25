import React from "react";
import { useState } from "react";
import DeleteWarningModal from "./DeleteWarningModal";

const TaskyModelButton = ({ onClearClick, onOpen, isDarkMode }) => {
  // State to control the visibility of clear all confirmation modal
  const [showClearModal, setShowClearModal] = useState(false);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-3">
          <button
            className={`btn ${
              isDarkMode ? "btn-outline-success" : "btn-success"
            }`}
            type="button"
            onClick={onOpen}
          >
            ➕ Add Tasks
          </button>
          <button
            className={`btn ${
              isDarkMode ? "btn-outline-danger" : "btn-danger"
            }`}
            type="button"
            onClick={() => setShowClearModal(true)}
          >
            🗑️ Clear Tasks
          </button>
        </div>
      </div>

      {showClearModal && (
        <DeleteWarningModal
          taskId="all"
          onDelete={onClearClick}
          onClose={() => setShowClearModal(false)}
          isDarkMode={isDarkMode}
          isBulkDelete={true}
        />
      )}
    </>
  );
};

export default TaskyModelButton;
