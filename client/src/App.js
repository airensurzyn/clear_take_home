import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Map from './components/maps/Map';
import Header from './components/header';

function App() {
	return (
		<div className="App">
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path={'/map'} component={Map}></Route>
					<Route path={'/*'} component={Home}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
