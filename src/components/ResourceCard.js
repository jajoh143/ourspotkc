import React from "react";

class ResourceCard extends React.Component {
    render() {
        
        var cardStyle={
            width: "18rem",
            margin: "15px",
            height: "150px"
        };
        
        return (
            <div onClick={this.props.handleClick} className="card" style={cardStyle}>
                <div className="card-body">
                    <div className="card-title">{this.props.title}</div>
                    <a href={this.props.primaryLink} className="card-link">{this.props.primaryLinkName}</a>
                </div>
            </div>
        );
    }
}

export default ResourceCard;