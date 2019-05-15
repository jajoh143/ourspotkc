import React from "react";
import Resource from "../components/Resource"

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: []
        }
    }

    componentWillMount() {
        var that = this;
        fetch("https://ourspotkc.azurewebsites.net/wp-json/wp/v2/ourspot_resources")
            .then(function(response) {
                var content = response.json();
                that.setState({ resources: content });
            });
    }
    
    render() {

        var resourceContent = this.state.resources.map((content, idx) => {
           
        });

        return (
            <div>
                
            </div>
        );
    }
}
export default Resources;