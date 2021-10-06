function Test(props) {

  console.log(props.name)

  return (
    <div>
      {props.name.map(n => {
        return <li>{n.recipe.label}</li>
      })}
    </div>
  )

}

export default Test;