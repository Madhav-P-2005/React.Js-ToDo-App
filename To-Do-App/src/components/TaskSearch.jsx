import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";

const TaskSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control form-control-lg w-100 w-md-50"
        placeholder={ 
          window.innerWidth <=519 ? "Search Title/Category" :'🔍 Search your tasks... based on "Title" or "Category"'}
        value={query}
        onChange={handleChange}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default TaskSearch;