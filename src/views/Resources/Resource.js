import React from "react";
import ResourcePage from "./ResourcePage";

class Resource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resource: {},
      ogData: {}
    };
  }

  render() {
    return (
      <div>
        <ResourcePage />
      </div>
    );
  }
}

export default Resource;
