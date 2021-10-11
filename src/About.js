import React, { useEffect } from 'react';




const About = (props) => {
  console.log(props.name)
  useEffect(() => {

  }, [props.name])

  console.log(props.test)
  return (
    <div>
      <h1>About {props.name}</h1>
      <img src={props.image} height="400px" width="400px" />

    </div>
  )
}

export default About;