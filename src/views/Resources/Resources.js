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
    this.formatResources = this.formatResources.bind(this);
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
    let searchVal = event.target.value.toLowerCase();
    this.setState({ searchTerm: searchVal });
    let resources = this.state.ogData[this.state.resource.category];
    resources = resources.filter(
      x =>
        x.title.rendered.toLowerCase().includes(searchVal) ||
        x.content.rendered.toLowerCase().includes(searchVal)
    );

    var resourceObj = {
      category: this.state.resource.category,
      resources: resources
    };

    this.setState({ resource: resourceObj });
  }

  formatResources(arr) {
    let recObj = {};

    for (var rec in arr) {
      let resource = arr[rec];
      if (!recObj.hasOwnProperty(resource.acf.category)) {
        recObj[resource.acf.category] = [];
        recObj[resource.acf.category].push(resource);
      } else {
        recObj[resource.acf.category].push(resource);
      }
    }
    return recObj;
  }

  componentDidMount() {
    let that = this,
      apiUrl =
        "https://ourspotkc.azurewebsites.net/wp-json/wp/v2/ourspot_resources?per_page=100";

    if (this.props.location.pathname !== this.props.match.url) {
      this.props.history.push("/resources");
    }

    axios.get(apiUrl).then(resp => {
      var pages = parseInt(resp.headers["x-wp-totalpages"]);
      if (pages <= 1) {
        let res = this.formatResources(resp.data);
        that.setState({ resources: res, ogData: res });
      } else {
        for (let x = 0; x < pages; x++) {
          axios
            .get(apiUrl + "&page=" + (x + 1))
            .then(resp => {
              let newResources = resp.data,
              formattedResources = that.formatResources(newResources);
              that.setState({ resources: formattedResources, ogData: formattedResources });
            });
        }
      }
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
