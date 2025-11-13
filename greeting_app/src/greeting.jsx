import React from "react";

function greeting({ name, favoriteColor }) {
  const style = {
    color: favoriteColor,
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px",
  };

  function handleClick() {
    console.log(`${name} clicked the button!`);
  }

  return (
    <div style={{
      border: "2px solid #ddd",
      padding: "15px",
      borderRadius: "10px",
      margin: "10px",
      width: "300px",
    }}>
      <p style={style}>Hello {name}! Your favorite color is {favoriteColor}.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default greeting;
