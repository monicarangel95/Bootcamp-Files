import React from "react";

function JSXVariables() {
  const name = "Adam";
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React (insert thoughts about React here)</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
