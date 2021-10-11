import React from 'react';

const RecipeCard = (props) => {

  const handleChange = (n, img) => {
    props.selected({
      name: n,
      img: img
    })
  }


  return (
    <div onClick={() => handleChange(props.name, props.image)}>
      <h3>{props.name}</h3>
      <img src={props.image} height="300px" width="300px" />
    </div>
  )
}

export default RecipeCard;