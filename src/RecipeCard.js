import React from 'react';

const RecipeCard = (props) => {

  const handleChange = (n, img, link) => {
    props.selected({
      name: n,
      img: img
    })
    const url = link.replace('http://www.edamam.com/ontologies/edamam.owl#', '')
    props.url(url)
  }






  return (
    <div onClick={() => handleChange(props.information.label, props.information.image, props.information.uri)}>
      <h3>{props.information.label}</h3>
      <img src={props.information.image} height="300px" width="300px" />
    </div>
  )
}

export default RecipeCard;