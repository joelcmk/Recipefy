import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';
import './App.css'


const RecipeList = (props) => {





  return (
    <div className="test">
      {props.recipes.map(recipe => {
        return (
          <div >
            <RecipeCard information={recipe.recipe} test={props.test} url={props.url} selected={props.selected} />
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList;