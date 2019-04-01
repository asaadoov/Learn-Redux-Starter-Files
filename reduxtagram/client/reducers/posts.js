// reducers take the action and the state
// then it will return an updated copy of the state

//post reducer, take the action related to a post and update the post state
const posts = (state = [], action) => {
  console.log(state, action);
  return state;
};

export default posts;
