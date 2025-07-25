import React from "react";
import { useState, useRef } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import generateTask from "./TaskGenerate";

const TaskModel = ({ onTaskGenerate, onClose, isDarkMode }) => {
  const calendarRef = useRef(null);

  // Form States
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [imageInputType, setImageInputType] = useState("url");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Choose Your Category");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const [showPreview, setShowPreview] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const uploadedFileURL = uploadedFile
    ? URL.createObjectURL(uploadedFile)
    : null;

  const resetImageSection = () => {
    setImage("");
    setUploadedFile(null);
    setImageInputType("url");
    setShowPreview(false);
  };

  const handleTaskGenerate = () => {
    const task = generateTask({
      title,
      category,
      description,
      image: imageInputType === "url" ? image : uploadedFileURL,
      date: selectedDate,
    });
    onTaskGenerate(task);
  };

  return (
    <div
      className="modal show"
      style={{
        display: "block",
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(5px)",
      }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div
          className={`modal-content ${
            isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {/* Modal Header */}
          <div className="modal-header">
            <h1 className="modal-title fs-5">
              Customize Your Task As You Wish! 🤗
            </h1>
            <button
              type="button"
              className={`btn-close ${isDarkMode ? "btn-close-white" : ""}`}
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

          {/* Modal Body */}
          <div
            className={`modal-body ${
              isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {/* Task Title */}
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
                    placeholder="Type your Title..."
                    value={title}
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
                value={category}
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
                    value={description}
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

            {/* Image Input Type Toggle */}
            <div className="mb-3">
              <label className="form-label">Choose Image Input Method:</label>
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
                  📂 Upload an Image
                </label>
              </div>
            </div>

            {/* Image Input Field */}
            {imageInputType === "url" && (
              <div className="input-group mb-2">
                <span className="input-group-text">Image URL:</span>
                <input
                  type="text"
                  className="form-control bg-success-subtle"
                  value={image}
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
            {(image || uploadedFile) && (
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
                    src={image}
                    alt="Preview"
                    className="img-fluid rounded-4 shadow-sm"
                    style={{ maxHeight: "250px" }}
                  />
                )}
                {imageInputType === "upload" && uploadedFileURL && (
                  <img
                    src={uploadedFileURL}
                    alt="Uploaded Preview"
                    className="img-fluid rounded-4 shadow-sm"
                    style={{ maxHeight: "250px" }}
                  />
                )}
              </div>
            )}

            {/* Clear Image Button */}
            {(image || uploadedFile) && (
              <button
                className="btn btn-outline-danger mb-3 shadow-sm"
                onClick={resetImageSection}
              >
                🧹 Clear Image
              </button>
            )}

            {/* Date Picker */}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkTime"
                checked={showDate}
                onChange={() => setShowDate(!showDate)}
              />
              <label className="form-check-label" htmlFor="checkTime">
                📅 Add Time & Date
              </label>
              {showDate && (
                <div className="input-group">
                  <Flatpickr
                    className="form-control"
                    value={selectedDate}
                    options={{
                      enableTime: true,
                      time_24hr: false,
                      altInput: true,
                      altFormat: "F j, Y h:i K",
                      dateFormat: "Y-m-d H:i",
                      defaultDate: selectedDate,
                    }}
                    onChange={(date) => setSelectedDate(date[0])}
                    ref={calendarRef}
                  />
                  <button
                    className="input-group-text"
                    type="button"
                    onClick={() => {
                      if (calendarRef.current) {
                        calendarRef.current.flatpickr.open();
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faCalendarDays} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-success"
              data-bs-dismiss="modal"
              style={{
                boxShadow: "0 0 10px rgba(0, 255, 0, 0.6)",
                backdropFilter: "blur(2px)",
              }}
              onClick={handleTaskGenerate}
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
