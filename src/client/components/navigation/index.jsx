import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = () => (
	<div>
		<Link to="/">Login</Link>
	</div>
);

const mapNavigationStateToProp = (state) => {
  return {
    state
  }
}

export const ConnectedNavigation = connect(mapNavigationStateToProp)(Navigation);
