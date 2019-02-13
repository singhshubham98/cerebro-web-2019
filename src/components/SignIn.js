import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GoogleButton from 'react-google-button'
import { signIn } from "../actions/authActions";

class Signin extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <GoogleButton onClick={this.props.signIn}/>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps, { signIn })(Signin);