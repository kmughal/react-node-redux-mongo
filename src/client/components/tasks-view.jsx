import React from "react";
import PropTypes from "prop-types";
let count = 0;

export const TasksViewComponent = ({ tasks }) => (
	<section>
		<button
			className="btn btn-primary"
			type="button"
			data-toggle="collapse"
			data-target="#tasks-list"
			aria-expanded="false"
			aria-controls="collapseExample"
		>
			Tasks [{tasks.length}]
		</button>
		<div className="collapse" id="tasks-list">
			{tasks.length ? (
				<ul className="list-group">
					{tasks.map(task => (
						<li className="list-group-item" key={count++}>
							{task.task}
						</li>
					))}
				</ul>
			) : (
				<p className="alert alert-info" role="alert">
					Currently you dont have any task!
				</p>
			)}
		</div>
	</section>
);

TasksViewComponent.propTypes = {
	tasks: PropTypes.array
};
