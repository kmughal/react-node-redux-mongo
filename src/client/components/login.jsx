import React from "react";
import { connect } from "react-redux";
import { authenticateUser } from "../actions";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import {LoginHeadingComponent} from "./login-message";

const LoginComponent = ({ sendForm, authenticated }) =>
	authenticated ? (
		<Redirect to="/dashboard" />
	) : (
		<section>
			<LoginHeadingComponent authenticated={authenticated} />
			<form onSubmit={sendForm}>
				<div className="form-row align-items-center">
					<div className="col-auto">
						<label htmlFor="username" className="sr-only">
							Username
						</label>
						<input
							id="username"
							name="username"
							type="text"
							placeholder="username"
							className="form-control mb-2"
						/>
					</div>
					<div className="col-auto">
						<label className="sr-only" htmlFor="password">
							Password
						</label>
						<input
							id="password"
							name="password"
							type="text"
							placeholder="password"
							className="form-control mb-2"
						/>
					</div>
					<div className="col-auto">
						<button className="btn btn-primary">Sign-In</button>
					</div>
				</div>
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
