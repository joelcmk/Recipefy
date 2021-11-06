import React, { useState, useEffect } from 'react';

import RecipeView from './components/RecipeView';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';


const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState('chicken');
  const [recipeName, setRecipeName] = useState('chicken');
  const [selected, setSelected] = useState('');

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

  console.log(selected)

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h5" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Link to="/" className="link">
                Recipify
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>

          <Route exact path="/" render={(props) => {
            return (
              <div>
                <div className="search_form">
                  <form onSubmit={handleSubmit}>
                    <input id="recipeName" label="Recipe name" variant="outlined"
                      value={recipeName}
                      onChange={(e) => setRecipeName(e.target.value)}
                      type="text"
                      name="recipeName"
                      className="search_bar"
                    />
                    <button type="submit" variant="contained" className="search_button">Submit</button>
                  </form>
                </div>
                <div className="recipe_list">
                  {recipes.map(recipe => {
                    let id = recipe.recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '');
                    return (
                      <div >
                        <Link className="card_content" to={`/recipe/${id}`} onClick={(e) => setSelected(recipe.recipe)} >
                          <Card className="card" sx={{ width: 345 }} >
                            <CardMedia
                              component="img"
                              image={recipe.recipe.image}
                              height="300"
                            />
                            <CardContent>
                              <h2>{recipe.recipe.label}</h2>
                              <p>Type: {recipe.recipe.cuisineType}</p>
                              <p>Ingredients: {recipe.recipe.ingredients.length}</p>
                              <p>Source: {recipe.recipe.source}</p>
                            </CardContent>
                            <CardActions>
                              <Button size="small">Open</Button>
                            </CardActions>
                          </Card>
                        </Link >
                      </div>
                    )
                  })}
                </div>

              </div>
            )
          }} />
          <Route exact path="/recipe/:id" render={(props) => {
            return (
              <RecipeView recipe={selected} />
            )
          }} />
        </Switch>
        <div>
          <div className="footer_style" />
          <div className="style">
            <p>Made with &#10084;&#65039; form Austin.</p>
            <a className="footer_link" href='https://www.freepik.com/vectors/food'>Food vector created by bimbimkha - www.freepik.com</a>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;