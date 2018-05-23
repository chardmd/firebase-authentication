import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

import { isUserLogin } from "../../utils/webhelper";
import * as routes from "../../constants/routes";

const withAuthorization = () => Component => {
  class WithAuthorization extends React.Component {
    componentWillMount() {
      !isUserLogin() && this.props.history.push(routes.SIGN_IN);
    }

    render() {
      return this.props.authUser ? <Component /> : null;
    }
  }

  const mapStateToProps = state => ({
    authUser: state.app.authUser
  });

  return compose(withRouter, connect(mapStateToProps))(WithAuthorization);
};

export default withAuthorization;
