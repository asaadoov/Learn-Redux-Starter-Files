// reducers take the action and the state
// then it will return an updated copy of the state

//comment reducer, take the action related to a comment and update the comment state

//this function to handle a portion of the state only
const postComment = (state = [], action) => {
  const { type, author, comment, index } = action;

  switch (type) {
    case "ADD_COMMENT":
      //return the updated state with the new comment
      return [
        ...state,
        {
          user: author,
          text: comment
        }
      ];
    case "REMOVE_COMMENT":
      return [
        //returning everything before the comment which should be renoved
        ...state.slice(0, index),
        //returning everything after the comment which should be renoved
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  const { postId } = action;
  if (typeof postId != "undefined") {
    return {
      //get the current state
      ...state,
      //push a new comment to the state
      [postId]: postComment(state[postId], action)
    };
  }
  return state;
};

export default comments;
