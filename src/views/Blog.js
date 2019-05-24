import React from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import BlogPost from "../components/BlogPost";
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
    var mainBlogPost =
      Object.keys(this.state.post).length > 0 ? (
        <BlogPost post={this.state.post} />
      ) : (
        <Spinner animation="grow" />
      );

    return <div>{mainBlogPost}</div>;
  }
}

export default Blog;
