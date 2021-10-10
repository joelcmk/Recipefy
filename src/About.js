import React, { useEffect } from 'react';




const About = (props) => {
  console.log(props.name)
  useEffect(() => {

  }, [props.name])
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

export default About;