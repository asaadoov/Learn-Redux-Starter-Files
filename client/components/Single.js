import React, { Component } from "react";
import Photo from "./Photo";
import Comment from "./Comment";

class Single extends Component {
  render() {
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex(post => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    return (
      <div className="single-photo">
        <Photo index={i} post={post} {...this.props} />
        <Comment postComments={postComments} {...this.props} />;
      </div>
    );
  }
}

export default Single;
