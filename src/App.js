import React, { useState, useEffect } from 'react';
import Test from './Test';
const axios = require('axios')

function App(props) {

  const [value, setValue] = useState('https')
  const [test, setTest] = useState([])
  const [cs, setCs] = useState()

  useEffect(() => {
    getRecipes();
  }, [])

  /*
  const getRecipes = async () => {
    const result = await axios.get(`${value}://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=087b9bb4&app_key=10f69d2dd672bf98341ee4ec9af82a6d`)
    setTest(result.data.hits)
  }
  */

  const getRecipes = () => {
    fetch(`${value}://api.edamam.com/api/recipes/v2?type=public&q=alfredo%20sauce&app_id=087b9bb4&app_key=10f69d2dd672bf98341ee4ec9af82a6d`)
      .then(res => res.json())
      .then(
        (result) => {
          setTest(result.hits)
        }
      )
  }

  //test.hits.map(res => (
  //  console.log(res.recipe.label)
  //))




  //console.log(test[0][0].recipe.label)

  return (
    <div className="App">

      <Test name={test} />
    </div>
  );
}

export default App;
