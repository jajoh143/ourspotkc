import React from "react";

class Resource extends React.Component {
    render() {
        
        var cardStyle={
            width: "18rem"
        };
        
        return (
            <div className="card" style={cardStyle}>
                <div className="card-body">
                    <div className="card-title">{this.props.title}</div>
                    <div className="card-text">{this.props.description}</div>
                    <a href={this.props.primaryLink} className="card-link">{this.props.primaryLinkName}</a>
                </div>
            </div>
        );
    }
}

export default Resource;