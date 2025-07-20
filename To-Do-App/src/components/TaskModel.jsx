import { useState } from "react";

const TaskModel = () => {
  const [showTitle, setShowTitle] = useState(false);

  const [showDescription, setShowDescription] = useState(false);

  const [showImage, setShowImage] = useState(false);

  const [imageInputType, setImageInputType] = useState("url");

  const isValidImageURL = (url) => {
    return /\.(jpeg|jpg|gif|png|webp)$/i.test(url);
  };

  // const [showTime_Date, setShowTime_Date] = useState("");

  const [Title, setTitle] = useState("");

  const [Category, setCategory] = useState("Choose Your Category");

  const [Description, setDescription] = useState("");

  const [Image, setImage] = useState("");

  const [showPreview, setShowPreview] = useState(false);

  // const [Time_Date, setTime_Date] = useState("");

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
                  checked={showTitle}
                  onChange={() => {
                    setShowTitle(!showTitle);
                  }}
                />
                <label className="form-check-label" htmlFor="checkTitle">
                  📝 Add Title
                </label>
                {/* Shows Title when the user Checks the Input Box */}
                {showTitle && (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your Title Name..."
                      aria-label="Recipient’s username with two button addons"
                      value={Title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <button
                      className="btn btn-secondary btn-danger"
                      type="button"
                      onClick={() => {
                        setTitle("");
                      }}
                    >
                      🧹 Clear All
                    </button>
                  </div>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="input-group mb-3">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                  value={Category}
                  onChange={() => {
                    setCategory(e.target.value);
                  }}
                >
                  📦Add Category
                </label>
                <select className="form-select" id="inputGroupSelect01">
                  <option value="Choose Your Category">{Category}</option>
                  <option value="General/Personal">🥰General/Personal </option>
                  <option value="Work/Professional">
                    💼Work/Professional{" "}
                  </option>
                  <option value="Shopping">🛒Shopping </option>
                  <option value="Health&Fitness">💪Health & Fitness </option>
                  <option value="Finance">💸Finance </option>
                </select>
              </div>

              {/* Description Checkbox */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkDesc"
                  checked={showDescription}
                  onChange={() => {
                    setShowDescription(!showDescription);
                  }}
                />
                <label className="form-check-label" htmlFor="checkDesc">
                  📖 Add Description
                </label>
                {showDescription && (
                  <div className="mb-4 mt-2">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder=" Type your Description ...."
                      value={Description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>

                    <div className="mb-4 mt-2">
                      <button
                        className="btn btn-secondary btn-danger"
                        type="button"
                        onClick={() => {
                          setDescription("");
                        }}
                      >
                        🧹 Clear All
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Image Checkbox */}
              <div className="mb-3">
                <label className="form-label">
                  Choose Image Input Method :-{" "}
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="url"
                    checked={imageInputType === "url"}
                    onChange={() => {
                      setImageInputType("url");
                    }}
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    🌐 Enter a URL Link
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="upload"
                    checked={imageInputType === "upload"}
                    onChange={() => {
                      setImageInputType("upload");
                    }}
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    📂 Upload a file.
                  </label>
                </div>
              </div>

              {/*  Toggle Ratios Button of URL Image */}
              {imageInputType === "url" && (
                <>
                  <div className="mb-3 w-5">
                    <div className="input-group">
                      <span
                        className="input-group-text"
                        id="basic-addon3"
                        placeholder="Place your Image URL ... "
                      >
                        Image URL :-
                      </span>
                      <input
                        type="text"
                        class="form-control rounded-2 border border-success  bg-success-subtle"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                        value={Image}
                        onChange={(e) => setImage(e.target.value)}
                      />
                      <div className="mb-1 mt-2 px-2">
                        <button
                          className="btn bg-info-subtle bg-opacity-5 border border-info"
                          type="button"
                          onClick={() => {
                            setShowPreview(!showPreview);
                          }}
                        >
                          {showPreview ? "🙈 Hide Preview" : "🖼️ Preview Image"}
                        </button>

                        {/* ✅ Show Preview BELOW the button */}
                        {showPreview && Image && isValidImageURL && (
                          <img
                            src={Image}
                            className="img-fluid rounded-5"
                            alt="Preview-Image"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/*  Toggle Ratios Button of Upload Image */}
                  {imageInputType === "upload" && (
                    <>
                      <div className="mb-3 w-5">
                        <div className="input-group mb-3">
                          <label
                            className="input-group-text"
                            for="inputGroupFile01"
                          >
                            Upload
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="inputGroupFile01"
                            value={Image}
                            onChange={(e) =>{
                                setImage(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="mb-4 mt-2">
                    <button
                      className="btn btn-secondary btn-danger"
                      type="button"
                      onClick={() => {
                        setImage();
                        setShowPreview(false);
                      }}
                    >
                      🧹 Clear All
                    </button>
                  </div>
                </>
              )}
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

          {/*  Generate Task */}
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
    </>
  );
};

export default TaskModel;
