import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";
import { TasksViewComponent } from "./tasks-view";

export const TaskInputPanelComponent = ({ tasks, addNewTask }) => (
	<section>
		<form className="form-inline">
			<div className="form-group mb-2">
				<label className="sr-only" htmlFor="new-task">
					New task:
				</label>
				<input className="form-control" type="text" name="new-task" id="new-task" />
				&nbsp;
				<button className="btn btn-primary" onClick={addNewTask}>
				Save
			</button>
			</div>
			
		</form>
		<TasksViewComponent tasks={tasks} />
	</section>
);

TaskInputPanelComponent.propTypes = {
	id: PropTypes.string,
	addNewTask: PropTypes.func,
	tasks: PropTypes.array
};

export const mapStateToProps = ({ records, sessions }) => ({
	tasks: records.tasks ? records.tasks : sessions.tasks
});

export const mapActionToProps = (dispatch, { id }) => ({
	addNewTask() {
		const newTask = document.getElementById("new-task").value;
		dispatch(actions.addNewTask(id, newTask));
		document.getElementById("new-task").value = "";
	}
});

export const ConnectedTaskInputComponent = connect(
	mapStateToProps,
	mapActionToProps
)(TaskInputPanelComponent);
