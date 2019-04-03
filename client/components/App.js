import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ActionCreators from "../actions/actionCreators";
import Main from "./Main";

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
