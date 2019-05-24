import React from "react";

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    if (Object.keys(this.props.post).length > 0) {
      let post = this.props.post;
      console.log(post);
      post = {
        title: post.title.rendered,
        content: post.content.rendered
      };
      this.setState({ post: post });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>{this.state.post.title}</h1>
        <span dangerouslySetInnerHTML={{ __html: this.state.post.content }} />
      </div>
    );
  }
}

export default BlogPost;
