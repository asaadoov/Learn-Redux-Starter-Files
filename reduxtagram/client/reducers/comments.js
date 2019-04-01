// reducers take the action and the state
// then it will return an updated copy of the state

//comment reducer, take the action related to a comment and update the comment state
const comments = (state = [], action) => {
  console.log(state, action);
  return state;
};

export default comments;
