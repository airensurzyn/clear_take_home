import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './views/dashboard/Dashboard';
import Map from './views/map/Map';
import Header from './components/header/header';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path={'/map'} component={Map}></Route>
					<Route path={'/*'} component={Dashboard}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
