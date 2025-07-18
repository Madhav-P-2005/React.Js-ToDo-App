import React from "react";

const TaskyModelButton = ({onclearClick}) =>{



    return (
      <>
        <div className="container">
          <div className="d-grid gap-2">
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              type="button"
            >
              ➕ Add Tasks
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={onclearClick}
            >
              🧹 Clear/Reset Tasks
            </button>
          </div>
        </div>
      </>
    );
}

export default TaskyModelButton;