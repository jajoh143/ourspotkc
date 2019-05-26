import React from "react";
import ResourceCard from "./ResourceCard";
import Spinner from "react-bootstrap/Spinner";

function ResourceList(props) {
  const spinnerStyle = {
    height: "15rem",
    width: "15rem",
    display: "block",
    margin: "10rem auto 10rem"
  };

  const rowStyle = {
    minHeight: "750px"
  };

  var resourceList =
    props.resource.resources && props.resource.resources.length > 0 ? (
      props.resource.resources.map((content, idx) => (
        <div className="col col-12 col-sm-12 col-md-6 col-lg-4" key={idx}>
          <ResourceCard
            title={content.title.rendered}
            handleClick={() => props.openModal(content)}
            description={content.content.rendered}
            primaryLink={content.acf.resource_link}
            primaryLinkName={"Get in Touch"}
            logoSrc={content.acf.resource_icon_image}
          />
        </div>
      ))
    ) : (
      <Spinner style={spinnerStyle} />
    );

  return (
    <div className="container-fluid">
      <h5>{props.resource.category}</h5>
      <div className="row">{resourceList}</div>
    </div>
  );
}

export default ResourceList;
