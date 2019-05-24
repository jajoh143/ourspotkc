import React from "react";
import axios from "axios";
import ResourcesPage from "./ResourcesPage";
import ResourcePage from "./ResourcePage";
import Searchbar from "../../components/Searchbar";
import { Route, withRouter, Link } from "react-router-dom";

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: {},
      filteredResources: {},
      ogData: {},
      resource: {},
      showModal: false,
      searchTerm: ""
    };

    this.searchResources = this.searchResources.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  chooseCategory(category) {
    var resource = {
      category: category,
      resources: this.state.resources[category]
    };

    this.setState({ resource: resource });
    this.props.history.push("/resources/" + category);
  }

  searchResources(event) {
    event.persist();
    let searchVal = event.target.value;
    this.setState({ searchTerm: searchVal });
    let resources = this.state.ogData[this.state.resource.category];
    resources = resources.filter(
      x =>
        x.title.rendered.includes(searchVal) ||
        x.content.rendered.includes(searchVal)
    );

    var resourceObj = {
      category: this.state.resource.category,
      resources: resources
    };

    this.setState({ resource: resourceObj });
  }

  componentDidMount() {
    var that = this;
    axios
      .get(
        "https://ourspotkc.azurewebsites.net/wp-json/wp/v2/ourspot_resources"
      )
      .then(function(response) {
        var recs = response.data,
          recObj = {};

        for (var rec in recs) {
          let resource = recs[rec];
          if (!recObj.hasOwnProperty(resource.acf.category)) {
            recObj[resource.acf.category] = [];
            recObj[resource.acf.category].push(resource);
          } else {
            recObj[resource.acf.category].push(resource);
          }
        }

        that.setState({ resources: recObj, ogData: recObj });
      });
  }

  render() {
    var headerStyle = {
      textDecoration: "none",
      color: "#333",
      display: "inline-block"
    };

    var containerStyle = {
      minHeight: "700px"
    };

    return (
      <div className="container-fluid" style={containerStyle}>
        <Link to="/resources">
          <h2 style={headerStyle}> Resources</h2>
        </Link>
        <div className="row">
          <div className="col col-sm-12 col-md-8 col-lg-4 text-center ml-auto mr-auto">
            <Route
              path={`${this.props.match.path}/:category`}
              render={() => (
                <Searchbar
                  key="searchBar"
                  handleInput={e => this.searchResources(e)}
                />
              )}
            />
          </div>
        </div>
        <Route
          exact
          path={this.props.match.path}
          component={() => (
            <ResourcesPage
              chooseCategory={e => this.chooseCategory(e)}
              categories={this.state.resources}
            />
          )}
        />
        <Route
          path={`${this.props.match.path}/:category`}
          component={() => <ResourcePage resource={this.state.resource} />}
        />
      </div>
    );
  }
}

export default withRouter(Resources);
