import React from 'react';

const Recipe = (props) => {

  return (

    props.recipes.map(recipe => {
      return <li>{recipe.recipe.label}</li>
    })


  )
}

export default Recipe;