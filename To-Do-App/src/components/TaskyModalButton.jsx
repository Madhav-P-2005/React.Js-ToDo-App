import React from "react";

const TaskyModelButton = ({onclearClick , onOpen}) =>{



    return (
      <>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center my-3">
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              type="button"
              onClick={onOpen}
            >
              ➕ Add Tasks
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={onclearClick}
            >
              🗑️ Clear/Reset Tasks
            </button>
          </div>
        </div>
      </>
    );
}

export default TaskyModelButton;