import { useEffect } from "react";

const DeleteWarningModal = ({ taskId, onDelete, onClose, isDarkMode }) => {
  useEffect(() => {
    const modal = new bootstrap.Modal(document.getElementById("deleteModal"));
    modal.show();

    const handler = () => {
      onClose(); // Cleanup after modal is hidden
    };
    const el = document.getElementById("deleteModal");
    el.addEventListener("hidden.bs.modal", handler);

    return () => {
      el.removeEventListener("hidden.bs.modal", handler);
    };
  }, []);

  const handleDelete = () => {
    onDelete(taskId);
  };

  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div
          className={`modal-content ${
            isDarkMode ? "bg-dark text-light" : "bg-light"
          }`}
        >
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title" id="deleteModalLabel">
              Warning
            </h5>
            <button
              type="button"
              className={`btn-close ${isDarkMode ? "btn-close-white" : ""}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div
              className="alert alert-warning d-flex align-items-center border-0 bg-warning bg-opacity-10"
              role="alert"
            >
              <span className="fs-5">
                ⚠️ Do you really want to delete this task?
              </span>
            </div>
          </div>

          <div className="modal-footer border-top-0">
            <button
              type="button"
              className={`btn ${
                isDarkMode ? "btn-outline-secondary" : "btn-secondary"
              }`}
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className={`btn ${
                isDarkMode ? "btn-outline-danger" : "btn-danger"
              }`}
              onClick={handleDelete}
              data-bs-dismiss="modal"
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