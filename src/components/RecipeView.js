import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const RecipeView = (props) => {

  console.log(props.name)

  return (
    <div>
      <h1>{props.name.label}</h1>
      <img src={props.name.image} />

    </div>
  )


}

export default RecipeView;