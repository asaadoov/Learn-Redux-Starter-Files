// increment likes
export const increment = postId => {
  return {
    type: "INCREMENT_LIKES", //type of the action
    postId //which post needs to be incremented ?
  };
};

// add comment
export const addComment = (postId, author, comment) => {
  return {
    type: "ADD_COMMENT",
    postId, //which post is going to get the new comment ?
    author, //who write the comment ?
    comment //actual comment.
  };
};

// remove comment

export const removeComment = (postId, index) => {
  return {
    type: "REMOVE_COMMENT",
    postId, //which post the commetn belong to ?
    index //which comment should be deleted ?
  };
};
