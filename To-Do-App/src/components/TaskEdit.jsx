import React from "react";
import { useState, useEffect, useRef } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function TaskEdit({ task, onSave, onCancel, isDarkMode }) {
  const calendarRef = useRef(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Choose Your Category");
  const [description, setDescription] = useState("");
  const [imageInputType, setImageInputType] = useState("url");
  const [image, setImage] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setCategory(task.category || "Choose Your Category");
      setDescription(task.description || "");

      if (task.image?.startsWith("blob:")) {
        setImageInputType("upload");
        setUploadedFile(null); // can't restore actual blob, leave null
      } else {
        setImageInputType("url");
        setImage(task.image || "");
      }

      setSelectedDate(task.date ? new Date(task.date) : new Date());
    }
  }, [task]);

  const uploadedFileURL = uploadedFile
    ? URL.createObjectURL(uploadedFile)
    : null;

  const handleSave = () => {
    const updatedTask = {
      ...task,
      title: title.trim(),
      category,
      description: description.trim(),
      image: imageInputType === "url" ? image : uploadedFileURL,
      date: selectedDate,
    };
    onSave(updatedTask);
  };

  const resetImageSection = () => {
    setImage("");
    setUploadedFile(null);
    setImageInputType("url");
    setShowPreview(false);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl mb-4">✏️ Edit Task</h2>

      {/* Title */}
      <div className="mb-3">
        <label className="form-label">📝 Title</label>
        <input
          className="form-control"
          type="text"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="mb-3">
        <label className="form-label">📦 Category</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Choose Your Category">Choose Your Category</option>
          <option value="General/Personal">🥰 General/Personal</option>
          <option value="Work/Professional">💼 Work/Professional</option>
          <option value="Shopping">🛒 Shopping</option>
          <option value="Health&Fitness">💪 Health & Fitness</option>
          <option value="Finance">💸 Finance</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-3">
        <label className="form-label">📖 Description</label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Describe your task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Image input type toggle */}
      <div className="mb-3">
        <label className="form-label">Choose Image Input Method:</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="imageInput"
            id="urlRadioEdit"
            value="url"
            checked={imageInputType === "url"}
            onChange={() => setImageInputType("url")}
          />
          <label className="form-check-label" htmlFor="urlRadioEdit">
            🌐 Enter a URL Link
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="imageInput"
            id="uploadRadioEdit"
            value="upload"
            checked={imageInputType === "upload"}
            onChange={() => setImageInputType("upload")}
          />
          <label className="form-check-label" htmlFor="uploadRadioEdit">
            📂 Upload an Image
          </label>
        </div>
      </div>

      {/* Image input field */}
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
          <label className="input-group-text" htmlFor="fileUploadEdit">
            Upload
          </label>
          <input
            type="file"
            className="form-control"
            id="fileUploadEdit"
            onChange={(e) => setUploadedFile(e.target.files[0])}
          />
        </div>
      )}

      {/* Preview button */}
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

      {/* Image preview */}
      {showPreview && (
        <div className="text-center mb-3">
          {imageInputType === "url" && image && (
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

      {/* Clear image button */}
      {(image || uploadedFile) && (
        <button
          className="btn btn-outline-danger mb-3"
          onClick={resetImageSection}
        >
          🧹 Clear Image
        </button>
      )}

      {/* Date Picker */}
      <div className="mb-3">
        <label className="form-label">📅 Due Date</label>
        <div className="input-group">
          <Flatpickr
            className="form-control"
            value={selectedDate}
            options={{
              enableTime: true,
              time_24hr: true,
              altInput: true,
              altFormat: "F j, Y h:i K",
              dateFormat: "Y-m-d H:i",
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
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end gap-2 mt-4">
        <button className="btn btn-secondary" onClick={onCancel}>
          ❌ Cancel
        </button>
        <button className="btn btn-primary" onClick={handleSave}>
          💾 Save Changes
        </button>
      </div>
    </div>
  );
}

export default TaskEdit;
