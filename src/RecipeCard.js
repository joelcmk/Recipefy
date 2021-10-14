import React from 'react';
import { Link } from 'react-router-dom';


const RecipeCard = (props) => {

  const handleChange = (n, img, link) => {
    props.selected({
      name: n,
      img: img
    })
    const url = link.replace('http://www.edamam.com/ontologies/edamam.owl#', '')
    props.test(url)
  }






  return (
    <Link to={`/${props.url}`}
      onClick={() => handleChange(props.information.label, props.information.image, props.information.uri)}
    >
      <div >
        <h3>{props.information.label}</h3>
        <img src={props.information.image} height="300px" width="300px" />
        <button className="open-card_button" variant="link">Open</button>
      </div>
    </Link>
  )
}

export default RecipeCard;