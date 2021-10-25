import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import About from './About';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState('chicken');
  const [recipeName, setRecipeName] = useState('chicken');
  const [selectedRecipe, setSetlectedRecipe] = useState({ name: '', image: '', });
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=087b9bb4&app_key=10f69d2dd672bf98341ee4ec9af82a6d`)
      .then(response => response.json())
      .then(data => {
        setRecipes(data.hits)
      })
      .catch('Something went wrong.')
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(recipeName)
  }

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Link to="/" className="link">
                Home
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Link to="/about" className="link">
                About
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <form onSubmit={handleSubmit}>
          <TextField id="recipeName" label="Recipe name" variant="outlined"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            type="text"
            name="recipeName"
          />
          <Button type="submit" variant="contained">Submit</Button>
        </form>

        <Switch>
          <Route exact path="/about" componenet={About} />
          <Route>
            <RecipeList recipes={recipes} selected={setSetlectedRecipe} address={setAddress} url={address} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;