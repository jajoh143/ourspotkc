import React from "react";

class ResourceCard extends React.Component {
  render() {
    var cardStyle = {
      margin: "15px",
      maxWidth: "300px",
      height: "175px"
    };

    var cardLogoStyle = {
      maxHeight: "80px",
      marginTop: "5px"
    };

    var cardTitleStyle = {
      padding: "5px 5px 0"
    };

    return (
      <div onClick={this.props.handleClick} className="card" style={cardStyle}>
        <h5 style={cardTitleStyle}>{this.props.title}</h5>
        <div className="card-body d-flex">
          <img
            src={this.props.logoSrc}
            alt="Company Logo"
            style={cardLogoStyle}
            className="img-fluid align-self-center justify-content-center ml-auto mr-auto"
          />
        </div>
      </div>
    );
  }
}

export default ResourceCard;
