import React, { useEffect } from 'react';




const About = (props) => {

  useEffect(() => {

  }, [props.name])


  return (
    <div>
      <h1>About {props.name}</h1>
      <img src={props.image} height="400px" width="400px" />

    </div>
  )
}

export default About;