import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import MainPage from './Components/MainPage';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" render={(props) => <Dashboard {...props} />} />
			<Route exact path="/mainPage" render={(props) => <MainPage {...props} />} />
			<Route exact path="/mainPage/:sectionName" render={(props) => <MainPage {...props} />} />
			<Route exact path="/mainPage/:sectionName/:variableName" render={(props) => <MainPage {...props} />} />
			<Route exact path="/mainPage/:sectionName/partNumber/:partNumber" render={(props) => <MainPage {...props} />} />
			<Route
				exact
				path="/mainPage/:sectionName/productSection/:productSectionName"
				render={(props) => <MainPage {...props} />}
			/>

			{/* Private Routes */}
		</Switch>
	</BrowserRouter>
);

export default App;
