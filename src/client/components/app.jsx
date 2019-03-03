import * as React from "react";
import { Provider } from "react-redux";
import { store } from "../reducer/index";
import { Route, Router } from "react-router";
import { history } from "../infrastructure/history";

import { ConnectedLoginComponent } from "../components/login";
import { ConnectedDashBoardComponent } from "../components/dashboard";
import { SignOutComponent } from "../components/sign-out";
import { ConnectedRegisterNewUserComponent } from "../components/registeration-form";

export const App = () => (
	<Provider store={store}>
		<Router history={history}>
			<div className="container-fluid">
				<Route
					exact
					path="/"
					render={match => <ConnectedLoginComponent match={match} />}
				/>
				<Route
					exact
					path="/dashboard"
					render={match => <ConnectedDashBoardComponent match={match} />}
				/>
				<Route
					exact
					path="/signout"
					render={match => <SignOutComponent match={match} />}
				/>
				<Route
					exact
					path="/register"
					render={match => <ConnectedRegisterNewUserComponent match={match} />}
				/>
			</div>
		</Router>
	</Provider>
);
