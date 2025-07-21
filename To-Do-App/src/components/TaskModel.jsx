import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";     // or any other theme like 'light', 'airbnb', etc.

import generateTask from "./TaskGenerate";


const TaskModel = ({onTaskGenerate}) => {

  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showDate , setShowDate] = useState(false);

  const [imageInputType, setImageInputType] = useState("url");
  const [uploadFile, setUploadedFile] = useState(null);
  const [Title, setTitle] = useState("");
  const [Category, setCategory] = useState("Choose Your Category");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);


  const isValidImageURL = (url) => /\.(jpeg|jpg|gif|png|webp)$/i.test(url);

  const resetImageSection = () => {
    setImage("");
    setUploadedFile(null);
    setImageInputType("url");
    setShowPreview(false);
  };

  const uploadedFileURL = uploadFile ? URL.createObjectURL(uploadFile) : null;


  return (
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
          {/* Header */}
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

          {/* Body */}
          <div className="modal-body">
            {/* Title Checkbox */}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkTitle"
                checked={showTitle}
                onChange={() => setShowTitle(!showTitle)}
              />
              <label className="form-check-label" htmlFor="checkTitle">
                📝 Add Title
              </label>
              {showTitle && (
                <div className="input-group mt-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your Title Name..."
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => setTitle("")}
                  >
                    🧹 Clear
                  </button>
                </div>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                📦 Category
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Choose Your Category">
                  Choose Your Category
                </option>
                <option value="General/Personal">🥰 General/Personal</option>
                <option value="Work/Professional">💼 Work/Professional</option>
                <option value="Shopping">🛒 Shopping</option>
                <option value="Health&Fitness">💪 Health & Fitness</option>
                <option value="Finance">💸 Finance</option>
              </select>
            </div>

            {/* Description */}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkDesc"
                checked={showDescription}
                onChange={() => setShowDescription(!showDescription)}
              />
              <label className="form-check-label" htmlFor="checkDesc">
                📖 Add Description
              </label>
              {showDescription && (
                <div className="mt-2">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Type your description..."
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => setDescription("")}
                  >
                    🧹 Clear
                  </button>
                </div>
              )}
            </div>

            {/* Image Input Toggle */}
            <div className="mb-3">
              <label className="form-label">
                Choose Image Input Method :-{" "}
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="imageInput"
                  id="urlRadio"
                  value="url"
                  checked={imageInputType === "url"}
                  onChange={() => setImageInputType("url")}
                />
                <label className="form-check-label" htmlFor="urlRadio">
                  🌐 Enter a URL Link
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="imageInput"
                  id="uploadRadio"
                  value="upload"
                  checked={imageInputType === "upload"}
                  onChange={() => setImageInputType("upload")}
                />
                <label className="form-check-label" htmlFor="uploadRadio">
                  📂 Upload a Image
                </label>
              </div>
            </div>

            {/* Image Input Sections */}
            {imageInputType === "url" && (
              <div className="input-group mb-2">
                <span className="input-group-text">Image URL:- </span>
                <input
                  type="text"
                  className="form-control bg-success-subtle"
                  value={Image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            )}

            {imageInputType === "upload" && (
              <div className="input-group mb-2">
                <label className="input-group-text" htmlFor="fileUpload">
                  Upload
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="fileUpload"
                  onChange={(e) => setUploadedFile(e.target.files[0])}
                />
              </div>
            )}

            {/* Preview Button */}
            {(Image || uploadFile) && (
              <div className="d-flex align-items-center gap-2 mb-2">
                <button
                  className="btn btn-outline-info"
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview ? "🙈 Hide Preview" : "🖼️ Preview Image"}
                </button>
              </div>
            )}

            {/* Image Preview */}
            {showPreview && (
              <div className="text-center mb-3">
                {imageInputType === "url" && (
                  <img
                    src={Image}
                    className="img-fluid rounded-4 shadow-sm"
                    alt="Preview"
                    style={{ maxHeight: "250px" }}
                  />
                )}
                {imageInputType === "upload" && uploadedFileURL && (
                  <img
                    src={uploadedFileURL}
                    className="img-fluid rounded-4 shadow-sm"
                    alt="Uploaded Preview"
                    style={{ maxHeight: "250px" }}
                  />
                )}
              </div>
            )}

            {/* Clear Image Section */}
            {(Image || uploadFile) && (
              <button
                className="btn btn-outline-danger mb-3 shadow-sm"
                onClick={resetImageSection}
              >
                🧹 Clear Image
              </button>
            )}

            {/* Time Date Checkbox (placeholder) */}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkTime"
                checked={showDate}
                onChange={() => {
                  setShowDate(!showDate);
                }}
              />
              <label className="form-check-label" htmlFor="checkTime">
                📅 Add Time & Date
              </label>

              {showDate && (
                <Flatpickr
                  className="form-control"
                  options={{
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                  }}
                  value={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date[0]);
                  }}
                />
              )}
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-success"
              data-bs-dismiss="modal"
              style={{
                boxShadow: "0 0 10px rgba(0, 255, 0, 0.6)", // glowing green
                backdropFilter: "blur(2px)",
              }}
              onClick={() => {
                const task =  generateTask({
                  
                  title: Title,
                  category : Category,
                  description : Description,
                  image : 
                          imageInputType === "url" ? Image : uploadFile ? uploadedFileURL : null,
                  date : selectedDate,

                });

              onTaskGenerate(task);

              }}
            >
              ✅ Generate Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModel;