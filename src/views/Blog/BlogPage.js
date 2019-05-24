import React from "react";
import Spinner from "react-bootstrap/Spinner";
import BlogPost from "./BlogPost";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      posts: []
    };
  }

  render() {
    let spinnerStyle = {
      width: "250px",
      height: "250px",
      margin: "100px"
    };

    let blogContainerStyle = {
      padding: "25px",
      border: "1px solid #eee",
      minHeight: "550px"
    };

    var mainBlogPost =
      Object.keys(this.props.post).length > 0 ? (
        <div className="col col-sm-12">
          <BlogPost post={this.props.post} />
        </div>
      ) : (
        <div className="col col-sm-12 col-md-8 col-lg-6 ml-auto mr-auto">
          <Spinner style={spinnerStyle} animation="border" />
        </div>
      );

    return (
      <div className="container-fluid">
        <h2>Most Recent Blog Post</h2>
        <div className="container" style={blogContainerStyle}>
          <div className="row">{mainBlogPost}</div>
        </div>
      </div>
    );
  }
}

export default BlogPage;
