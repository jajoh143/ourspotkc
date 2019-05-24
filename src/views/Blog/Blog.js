import React from "react";
import axios from "axios";
import BlogPage from "./BlogPage";

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://ourspotkc.azurewebsites.net/wp-json/wp/v2/posts?orderby=date&per_page=1"
      )
      .then(resp => this.setState({ post: resp.data[0] }));
  }

  render() {
    return (
      <div>
        <BlogPage post={this.state.post} />
      </div>
    );
  }
}

export default Blog;
