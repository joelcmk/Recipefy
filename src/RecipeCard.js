import React from 'react';

const RecipeCard = (props) => {

  const handleChange = (name) => {
    props.selected(name)
  }


  return (
    <div onClick={() => handleChange(props.name)}>
      <h3>{props.name}</h3>
    </div>
  )
}

export default RecipeCard;