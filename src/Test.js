import React, { useState } from 'react';
import About from './About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Test = (props) => {
  const [test, setTest] = useState('')

  const handleClick = () => {
    setTest('jaja'
    )
  }

  console.log(test);



  return (
    <div>
      <Route exact path="/about" component={() => <About name={test} />} />

      <h1 onClick={handleClick}>{props.name}</h1>
      <img src={props.image} alt="recipe" height="300" width="300" />
    </div>
  )
}

export default Test;