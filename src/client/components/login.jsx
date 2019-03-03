import React from "react";
import { connect } from "react-redux";
import { authenticateUser } from "../actions";
import PropTypes from "prop-types";
import { Redirect } from "react-router";

const LoginHeadingComponent = ({ authenticated }) => {
	if (!authenticated && authenticated !== false) {
		return <p className="alert alert-info" role="alert">Please enter login details to sign in</p>;
	} else {
		return authenticated ? (
			<p className="alert alert-success" role="alert">Details are correct!</p>
		) : (
			<p className="alert alert-danger" role="alert">Invalid user information</p>
		);
	}
};

const LoginComponent = ({ sendForm, authenticated }) =>
	authenticated ? (
		<Redirect to="/dashboard" />
	) : (
		<section>
			<LoginHeadingComponent authenticated={authenticated} />
			<form onSubmit={sendForm}>
				<input
					id="username"
					name="username"
					type="text"
					placeholder="username"
				/>
				<input
					id="password"
					name="password"
					type="text"
					placeholder="password"
				/>
				{}
				<input type="submit" value="Login" />
			</form>
		</section>
	);

const mapStatesToProps = ({ sessions }) => ({
	authenticated: sessions.authenticated
});

const mapStatesToActions = dispatch => ({
	sendForm(e) {
		e.preventDefault();
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		dispatch(authenticateUser(username, password));
	}
});

LoginComponent.propTypes = {
	sendForm: PropTypes.func,
	authenticated: PropTypes.bool
};

export const ConnectedLoginComponent = connect(
	mapStatesToProps,
	mapStatesToActions
)(LoginComponent);
