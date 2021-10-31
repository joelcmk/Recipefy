import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../App.css';

const RecipeCard = (props) => {

  const handleChange = (data) => {
    props.cardData(data)
  }

  return (
    <Link to={`/recipe/${props.id}`} onClick={handleChange(props.information)} >
      <Card className="card" sx={{ width: 345 }} >
        <CardMedia
          component="img"
          image={props.information.image}
          height="300"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.information.label}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Open</Button>
        </CardActions>
      </Card>
    </Link >
  )
}

export default RecipeCard;