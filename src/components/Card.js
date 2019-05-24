import React from "react";

function Card(props) {
  var cardStyle = {
    margin: "15px",
    maxWidth: "300px",
    height: "175px"
  };

  var cardTitleStyle = {
    padding: "5px 5px 0"
  };

  return (
    <div onClick={props.handleClick} className="card" style={cardStyle}>
      {props.title ? <h5 style={cardTitleStyle}>{props.title}</h5> : ""}
      <div className="card-body d-flex">{props.children}</div>
    </div>
  );
}

export default Card;
