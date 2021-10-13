import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';


const RecipeList = (props) => {

  const [test, setTest] = useState('')





  return (
    <div>
      {props.recipes.map(recipe => {
        return (
          <Link to={`recipe/${props.url}`}>
            <RecipeCard information={recipe.recipe} url={props.test} selected={props.selected} />
          </Link>
        )
      })}
    </div>
  )
}

export default RecipeList;