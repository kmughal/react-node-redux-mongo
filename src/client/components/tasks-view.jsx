import React from "react";
import PropTypes from "prop-types";
let count = 0;

export const TasksViewComponent = ({ tasks }) => (
	<section>
		<button
			className="btn btn-success"
			type="button"
			data-toggle="collapse"
			data-target="#tasks-list"
			aria-expanded="false"
			aria-controls="collapseExample"
		>
			Tasks [{tasks.length}]
		</button>
	
		<div>
			<br/>
			{tasks.length ? (
				<div className="mt-10 pt-20">
					{tasks.map(task => (
						<div className="card p-2 mt-10" key={count++}>
							<h5>A task added by you.</h5>
							<div className="card-body">
								<p className="card-text">{task.task}</p>
							</div>
							<button className="btn btn-primary">Edit</button>
						</div>
					))}
				</div>
			) : (
				<p className="alert alert-info" role="alert">
					Currently you dont have any task.
				</p>
			)}
		</div>
	</section>
);

TasksViewComponent.propTypes = {
	tasks: PropTypes.array
};
