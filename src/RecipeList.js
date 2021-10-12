import React from 'react';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';


const RecipeList = (props) => {

  return (
    <div>
      {props.recipes.map(recipe => {
        return (
          <Link to="/about">
            <RecipeCard information={recipe.recipe} selected={props.selected} />
          </Link>
        )
      })}
    </div>
  )
}

export default RecipeList;