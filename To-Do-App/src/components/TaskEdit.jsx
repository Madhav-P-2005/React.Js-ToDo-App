import React, { useState } from "react";
const TaskEdit = ({ taskToEdit, onSaveEdit, onCancelEdit }) => {
  const [EditTitle, setEditTitle] = useState();
  const [EditDescription, setEditDescription] = useState();
  const [EditCategory, setEditCategory] = useState();
  const [EditImage, setEditImage] = useState();
  const [EditTime, setEditTime] = useState();

  useEffect(() => {
    if (taskToEdit) {
      setEditTitle(taskToEdit.title || "");
      setEditDescription(taskToEdit.description || "");
      setEditCategory(taskToEdit.category || "");
      setEditImage(taskToEdit.image || "");
      setEditTime(taskToEdit.date || "");
    }
  }, [taskToEdit]);

  return (
    <>
      <input
        type="text"
        value={EditTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        placeholder="Edit Title"
      />
      <input
        type="text"
        value={EditDescription}
        onChange={(e) => setEditDescription(e.target.value)}
        placeholder="Edit Description"
      />
      <input
        type="text"
        value={EditCategory}
        onChange={(e) => setEditCategory(e.target.value)}
        placeholder="Edit Category"
      />
      <input
        type="text"
        value={EditImage}
        onChange={(e) => setEditImage(e.target.value)}
        placeholder="Edit Image"
      />
      <input
        type="time"
        value={EditTime}
        onChange={(e) => setEditTime(e.target.value)}
        placeholder="Edit Time"
      />
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={onSaveEdit}
      >
        <FontAwesomeIcon icon={fasquarecheck} /> Save
      </button>
      <button
        type="button"
        class="btn btn-outline-warning"
        onClick={onCancelEdit}
      >
        <FontAwesomeIcon icon={faXmark} /> Cancel
      </button>
    </>
  );
};
export default TaskEdit;