import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';


const RecipeList = (props) => {





  return (
    <div>
      {props.recipes.map(recipe => {
        return (

          <RecipeCard information={recipe.recipe} test={props.test} url={props.url} selected={props.selected} />

        )
      })}
    </div>
  )
}

export default RecipeList;