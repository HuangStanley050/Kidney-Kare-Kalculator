import React from "react";
import { connect } from "react-redux";

const ResultPage = props => {
  console.log(props.wizard);
  return <h1>Result page</h1>;
};
const mapStateToProps = state => ({
  wizard: state.form.wizard
});
export default connect(mapStateToProps)(ResultPage);
