import React from "react";
import axios from "axios";
import ResourcesPage from "./ResourcesPage";
import ResourcePage from "./ResourcePage";
import Searchbar from "../../components/Searchbar";
import { Route, withRouter } from "react-router-dom";

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

    this.filterResources = this.filterResources.bind(this);
    this.searchResources = this.searchResources.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  chooseCategory(category) {
    var resource = {};
    resource[category] = this.state.resources[category];
    this.setState({ resource: resource });
    this.props.history.push("/resources/" + category);
  }

  searchResources(event) {
    event.persist();
    var searchVal = event.target.value;
    this.setState({ searchTerm: searchVal });
    this.props.handleSearch(searchVal);
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

  filterResources(searchTerm) {
    var filteredResources = {};

    if (Object.keys(this.state.ogData).length > 0) {
      for (var res in this.state.ogData) {
        let resources = this.state.ogData[res],
          filteredArray = [];

        for (let x = 0; x < resources.length; x++) {
          let resource = resources[x];
          if (
            (resource.title && resource.title.rendered.includes(searchTerm)) ||
            (resource.content && resource.content.rendered.includes(searchTerm))
          ) {
            filteredArray.push(resource);
          }
        }
        if (filteredArray.length > 0) {
          filteredResources[res] = filteredArray;
        }
      }
      this.setState({ resources: filteredResources });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Resources</h2>
        <div className="row">
          <div className="col col-sm-12 col-md-8 col-lg-4 text-center ml-auto mr-auto">
            <Searchbar handleInput={e => this.searchResources(e)} />
          </div>
        </div>
        <Route
          exact
          path={this.props.match.path}
          component={() => (
            <ResourcesPage
              chooseCategory={e => this.chooseCategory(e)}
              resources={this.state.resources}
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
