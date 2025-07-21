import React from 'react'

const generateTask = ({title , category , description , image, date}) => {
  return {

    title : title.trim() || "Untitled",

    category, 

    description : description?.trim(),

    image, 

    date: date || null,   // Flatpickr returns array 

    id : crypto.randomUUID(),

  };
}

export default generateTask