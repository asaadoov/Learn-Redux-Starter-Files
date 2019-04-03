// reducers take the action and the state
// then it will return an updated copy of the state

//post reducer, take the action related to a post and update the post state
const posts = (state = [], action) => {
  const { type, postId } = action;
  switch (type) {
    case "INCREMENT_LIKES":
      //return updated state
      return [
        ...state.slice(0, postId), //copy everything in the state array upto the intended post
        { ...state[postId], likes: state[postId].likes + 1 },
        ...state.slice(postId + 1) //copy everything after the one is updating
      ];
    default:
      return state;
  }
};

export default posts;
