import React from "react";

function Card(props) {
  var title = props.title;

  var cardStyle = {
    margin: "15px",
    maxWidth: "300px",
    height: "175px"
  };

  var cardTitleStyle = {
    padding: "5px 5px 0"
  };

  if (title && title.length >= 20) {
    title = title.substring(0, 20);
    console.log(title);
  }
  return (
    <div
      onClick={props.handleClick}
      className="card actionable"
      style={cardStyle}
    >
      {title ? <h5 style={cardTitleStyle}>{title}</h5> : ""}
      <div className="card-body d-flex">{props.children}</div>
    </div>
  );
}

export default Card;
