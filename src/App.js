import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState('chicken');
  const [recipeName, setRecipeName] = useState('chicken')

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          type="text" id="recipeName"
          name="recipeName"
        />
      </form>
      <button type="submit">Submit</button>
      <Recipe recipes={recipes} />
    </div>
  )
}

export default App;