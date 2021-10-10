import React, { useEffect } from 'react';




const About = (props) => {
  console.log(props.name)
  useEffect(() => {

  }, [props.name])

  console.log(props.test)
  return (
    <div>
      <h1>About {props.test}</h1>
      <p>Hello</p>
    </div>
  )
}

export default About;