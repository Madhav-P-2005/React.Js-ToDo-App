const TaskModel = () => {
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Customize Your Task As You Wish! 🤗
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {/* Title Checkbox */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkTitle"
                />
                <label className="form-check-label" htmlFor="checkTitle">
                  📝 Add Title
                </label>
              </div>

              {/* Category Dropdown */}
              <div className="input-group mb-3">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Add Category
                </label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Choose Your Category</option>
                  <option value="1">General</option>
                  <option value="2">Groceries</option>
                  <option value="3">Goals</option>
                  <option value="4">Expenses</option>
                </select>
              </div>

              {/* Description Checkbox */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkDesc"
                />
                <label className="form-check-label" htmlFor="checkDesc">
                  📖 Add Description
                </label>
              </div>

              {/* Image Checkbox */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkImage"
                />
                <label className="form-check-label" htmlFor="checkImage">
                  🖼️ Add Image
                </label>
              </div>

              {/* Time/Date Checkbox */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkTime"
                />
                <label className="form-check-label" htmlFor="checkTime">
                  🕒 Add Time & Date
                </label>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Generate Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default TaskModel;