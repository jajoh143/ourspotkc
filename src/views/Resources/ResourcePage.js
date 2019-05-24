import React from "react";
import ResourceList from "./ResourceList";
import ResourceModal from "./ResourceModal";

class ResourcePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      resource: {}
    };

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

  render() {
    return (
      <div>
        <ResourceList
          openModal={val => this.openModal(val)}
          resource={this.props.resource}
        />
        <ResourceModal
          show={this.state.showModal}
          title={this.state.resource.title}
          content={this.state.resource.content}
          link={this.state.resource.link}
          onHide={() => this.setState({ showModal: false })}
        />
      </div>
    );
  }
}

export default ResourcePage;
