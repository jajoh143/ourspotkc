import React from "react"
import axios from "axios"
import ResourceCard from "../components/ResourceCard"
import ResourceModal from "../components/ResourceModal"

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: [],
            resource: {},
            showModal: false
        }

        this.openModal = this.openModal.bind(this);
    }

    openModal(resource) {
        if (resource) {
            let resourceObject = {
                title: resource.title.rendered,
                content: resource.content.rendered,
                link: resource.acf.resource_link
            };
            this.setState({ resource: resourceObject });
            this.setState({ showModal: true });
        }
    }   

    componentWillMount() {
        var that = this;
        axios.get("https://ourspotkc.azurewebsites.net/wp-json/wp/v2/ourspot_resources")
            .then(function(response) {
                console.log(response);
                that.setState({ resources: response.data });
            });
    }
    
    render() {

        var resourceContent = this.state.resources.map((content, idx) => {
            return <div  key={idx} className="col col-sm-12 col-md-6 col-lg-4">
                        <ResourceCard title={content.title.rendered} 
                                    handleClick={() => this.openModal(content)}
                                    description={content.content.rendered}
                                    primaryLink={content.acf.resource_link}
                                    primaryLinkName={"Get in Touch"} />
                    </div>
        });

        return (
            <div className="container-fluid">
                <div className="row">
                    {resourceContent}
                </div>
                <ResourceModal title={this.state.resource.title} 
                               content={this.state.resource.content} 
                               show={this.state.showModal}
                               link={this.state.resource.link}
                               onHide={() => this.setState({ showModal: false })}  />
            </div>
           
        );
    }
}
export default Resources;