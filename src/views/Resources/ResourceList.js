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

  return typeof props.resources !== "undefined" &&
    Object.keys(props.resources).length > 0 ? (
    Object.keys(props.resources).map((content, idx) => (
      <div className="container-fluid" key={idx}>
        <h5>{content}</h5>
        <div className="row">
          {props.resources[content].map((content, idx) => (
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
          ))}
        </div>
      </div>
    ))
  ) : (
    <div className="row">
      <div style={rowStyle} className="col col-10 ml-auto mr-auto">
        <Spinner style={spinnerStyle} animation="grow" />
      </div>
    </div>
  );
}

export default ResourceList;
