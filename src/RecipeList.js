import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = (props) => {

  return (
    <div>
      {props.recipes.map(recipe => {
        return <RecipeCard name={recipe.recipe.label} selected={props.selected} />
      })}
    </div>
  )
}

export default RecipeList;