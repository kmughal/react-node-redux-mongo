import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as actions from "../actions";

const RegisterUserComponent = ({ isRegistered,submitForm }) => (
<section>
	{isRegistered ? (<p>Your account is registered!</p>) : <span></span>}
	<form>
		<input type="text" id="new-user-name" name="new-user-name" />
		<input type="text" id="new-user-password" name="new-user-password" />
		<button className="btn btn-primary" onClick={submitForm}>
			Register
		</button>
	</form>
</section>)

RegisterUserComponent.propTypes = {
	submitForm: PropTypes.func,
	isRegistered : PropTypes.bool
};

const mapStateToProps = ({registerNewUser}) => {
	return {
		isRegistered : registerNewUser.registered
	}
};
const mapActionToProps = dispatch => ({
	submitForm(event) {
		event.preventDefault();
		const name = document.getElementById("new-user-name").value;
		const password = document.getElementById("new-user-password").value;
		dispatch(actions.requestToRegister(name, password));
	}
});

export const ConnectedRegisterNewUserComponent = connect(
	mapStateToProps,mapActionToProps
)(RegisterUserComponent);
