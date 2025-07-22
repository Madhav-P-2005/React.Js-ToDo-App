import React, { useState } from 'react'

const TaskSearch = ({onSearch}) => {

   const [query , setQuery] = useState("")

   const handleChange = (e) =>{

    const value = e.target.value

    setQuery(value)

    onSearch(value)   // call parent
 


   }

  return (
    <>
      {/* Search Bar */}
      <input
        type="text"
        className="form-control form-control-lg w-100 w-md-50"
        placeholder='🔍 Search your tasks... by "Title" or "Category"'
        value={query}
        onChange={handleChange}
      />
    </>
  );
}

export default TaskSearch