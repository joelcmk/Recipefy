import React from 'react';
import './RecipeView.css';

const RecipeView = (props) => {

  console.log(props.recipe.totalDaily.FAT)

  return (
    <div className="recipe_view">
      <h1 className="test">{props.recipe.label}</h1>
      <img src={props.recipe.image} Alt="" />
      <div className="ingredients">
        <h2>{props.recipe.ingredients.length} Ingredients</h2>
        {props.recipe.ingredients.map(ingredient => {
          return (
            <li>{ingredient.text}</li>
          )
        })}
      </div>
      <div>
        <h2>Nutrition</h2>
        <li>{props.recipe.totalDaily.FAT.label} {props.recipe.totalDaily.FAT.quantity} {props.recipe.totalDaily.FAT.unit}</li>
      </div>
    </div>
  )


}

export default RecipeView;