import React from 'react';

const RecipeCard = (props) => {

  const handleChange = (n, img) => {
    props.selected({
      name: n,
      img: img
    })
  }

  console.log(props.preva)


  return (
    <div onClick={() => handleChange(props.information.label, props.information.image)}>
      <h3>{props.information.label}</h3>
      <img src={props.information.image} height="300px" width="300px" />
    </div>
  )
}

export default RecipeCard;