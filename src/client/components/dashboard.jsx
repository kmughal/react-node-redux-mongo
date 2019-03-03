import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ConnectedTaskInputComponent } from "./task-input-panel";
import { history } from "../infrastructure/history";

const DashboardComponent = ({ id, name }) => (
	<section>
		<button className="btn btn-primary" onClick={() => history.push("/")}>
			Sign out
		</button>
		<h1>Welcome {name}</h1>
		<ConnectedTaskInputComponent id={id} />
	</section>
);

DashboardComponent.propTypes = {
	name: PropTypes.string,
	tasks: PropTypes.array,
	id: PropTypes.string
};

const mapStateToProps = ({ sessions }) => ({
	name: sessions.name,
	tasks: sessions.tasks,
	id: sessions.id
});

export const ConnectedDashBoardComponent = connect(mapStateToProps)(
	DashboardComponent
);
