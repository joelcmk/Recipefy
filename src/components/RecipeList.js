import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';
import '../App.css'


const RecipeList = (props) => {

  return (
    <div className="recipe_list">
      {props.recipes.map(recipe => {
        let cardPosition = recipe.recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '');
        return (
          <div >
            <RecipeCard information={recipe.recipe} id={cardPosition} cardData={props.cardData}
            />
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList;