import React, { useState } from 'react';
import Test from './Test';
import About from './About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Recipe = (props) => {

  const [test, setTest] = useState('')
  const [hello, setHello] = useState(false)


  const handleClick = (name, x) => {
    setTest(name)
    setHello(x)
  }


  console.log(hello)

  return (
    <div>
      <Route exact path="/about" component={() => <About name={test} />} />
      <About name={test} />
      {props.recipes.map(recipe => {
        return (
          <div>

            <p onClick={() => handleClick(recipe.recipe.label, true)}>{recipe.recipe.label}</p>

          </div>
        )

      })}

    </div>
  )


}

export default Recipe;