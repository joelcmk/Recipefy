import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import About from './About';
import Test from './Test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState('chicken');
  const [recipeName, setRecipeName] = useState('chicken')
  const [selectedRecipe, setSetlectedRecipe] = useState('')

  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=087b9bb4&app_key=10f69d2dd672bf98341ee4ec9af82a6d`)
      .then(response => response.json())
      .then(data => {
        setRecipes(data.hits)
      })
      .catch(err => 'Something went wrong.')
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(recipeName)
  }

  console.log(selectedRecipe)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <form onSubmit={handleSubmit}>
          <input
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            type="text" id="recipeName"
            name="recipeName"
          />
        </form>
        <button type="submit">Submit</button>
        <Switch>
          <Route path="/about">
            <About test={selectedRecipe} />
          </Route>
          <Route>
            <RecipeList recipes={recipes} selected={setSetlectedRecipe} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;