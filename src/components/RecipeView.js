/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import './RecipeView.css';

const RecipeView = (props) => (
  <div className="recipe_view">
    <h1 className="title">{props.recipe.label}</h1>
    <div className="nutrition">
      <img src={props.recipe.image} Alt="" />
      <div>
        <h2>Nutrition</h2>
        <li>{`${props.recipe.totalDaily.FAT.label} ${props.recipe.totalDaily.FAT.quantity.toFixed()} ${props.recipe.totalDaily.FAT.unit}`}</li>
        <li>{`${props.recipe.totalDaily.CHOCDF.label} ${props.recipe.totalDaily.CHOCDF.quantity.toFixed()} ${props.recipe.totalDaily.CHOCDF.unit}`}</li>
        <li>{`${props.recipe.totalDaily.CHOLE.label} ${props.recipe.totalDaily.CHOLE.quantity.toFixed()} ${props.recipe.totalDaily.CHOLE.unit}`}</li>
        <li>{`${props.recipe.totalDaily.FIBTG.label} ${props.recipe.totalDaily.FIBTG.quantity.toFixed()} ${props.recipe.totalDaily.FIBTG.unit}`}</li>
        <li>{`${props.recipe.totalDaily.MG.label} ${props.recipe.totalDaily.MG.quantity.toFixed()} ${props.recipe.totalDaily.MG.unit}`}</li>
        <li>{`${props.recipe.totalDaily.VITC.label} ${props.recipe.totalDaily.VITC.quantity.toFixed()} ${props.recipe.totalDaily.VITC.unit}`}</li>
      </div>
    </div>
    <div className="ingredients">
      <h2>{`${props.recipe.ingredients.length} Ingredients`}</h2>
      {props.recipe.ingredients.map((ingredient) => (
        <li>{ingredient.text}</li>
      ))}
    </div>
    <div className="recipe_button">
      <a target="_blank" rel="noreferrer" href={props.recipe.url}>Full Recipe</a>
    </div>
  </div>
);

export default RecipeView;
