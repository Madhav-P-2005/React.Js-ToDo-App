import React from "react";

const DeleteWarningModal = ({ taskId, onDelete }) => {
  const handleYesClick = () => {
    onDelete(taskId);
    const modal = bootstrap.Modal.getInstance(
      document.getElementById(`DeleteWarningModal-${taskId}`)
    );
    modal.hide();
  };

  return (
    <div
      className="modal fade"
      id={`DeleteWarningModal-${taskId}`} // Unique ID
      tabIndex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">
              Warning
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div
              className="alert alert-warning d-flex align-items-center"
              role="alert"
            >
              ⚠️ Do you really want to delete this task?
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleYesClick}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteWarningModal;