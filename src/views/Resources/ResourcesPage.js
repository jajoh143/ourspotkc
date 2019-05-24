import React from "react";
import Card from "../../components/Card";
import Spinner from "react-bootstrap/Spinner";

class ResourcesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: {},
      resource: {},
      showModal: false,
      searchTerm: ""
    };
  }

  render() {
    const spinnerStyle = {
      height: "15rem",
      width: "15rem",
      display: "block",
      margin: "10rem auto 10rem"
    };

    var categoryList =
      Object.keys(this.props.categories).length > 0 ? (
        Object.keys(this.props.categories).map((cat, idx) => (
          <div key={idx} className="col col-sm-12 col-md-4 col-lg-3">
            <Card handleClick={() => this.props.chooseCategory(cat)}>
              <h1>{cat}</h1>
            </Card>
          </div>
        ))
      ) : (
        <Spinner style={spinnerStyle} animation="grow" />
      );

    return (
      <div>
        <div className="row">{categoryList}</div>
      </div>
    );
  }
}

export default ResourcesPage;
