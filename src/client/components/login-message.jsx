import React from "react";

export const LoginHeadingComponent = ({authenticated}) => {
	if (!authenticated && authenticated !== false) {
		return (
			<p className="alert alert-info" role="alert">
				Please enter login details to sign in
			</p>
		);
	} else {
		return authenticated ? (
			<p className="alert alert-success" role="alert">
				Details are correct!
			</p>
		) : (
			<p className="alert alert-danger" role="alert">
				Invalid user information
			</p>
		);
	}
};
