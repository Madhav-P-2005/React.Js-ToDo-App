const DeleteWarningModal = ({
  taskId,
  onDelete,
  onClose,
  isDarkMode,
  isBulkDelete = false,
}) => {
  // Combined handler for successful deletion
  const handleDelete = () => {
    onDelete(taskId);
    onClose();
  };

  // Accessibility feature: click outside to dismiss
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
      onClick={handleClickOutside}
    >
      <div
        className={`card shadow border-0 ${
          isDarkMode ? "bg-dark text-light" : "bg-light"
        }`}
        style={{ maxWidth: "400px", width: "90%" }}
      >
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="m-0">Warning</h5>
            <button
              type="button"
              className={`btn-close ${isDarkMode ? "btn-close-white" : ""}`}
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="alert alert-warning border-0 bg-warning bg-opacity-10 mb-4">
            <span className="fs-5">
              ⚠️{" "}
              {isBulkDelete
                ? "Do you really want to clear all tasks?"
                : "Do you really want to delete this task?"}
            </span>
          </div>

          <div className="d-flex justify-content-end gap-2">
            <button
              type="button"
              className={`btn ${
                isDarkMode ? "btn-outline-secondary" : "btn-secondary"
              }`}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`btn ${
                isDarkMode ? "btn-outline-danger" : "btn-danger"
              }`}
              onClick={handleDelete}
            >
              Yes, {isBulkDelete ? "Clear All" : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteWarningModal;