import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';
import Dashboard from './routes/Dashboard';
import ChatConsole from './routes/ChatConsole';
import Settings from './routes/Settings';
import SurveyForm from './routes/SurveyForm';
import ChatWithVisitors from './routes/ChatWithVisitors';
import Operators from './routes/Operators';
import NotFound from './routes/404';
import './style';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		return (
			<div id="app">
				<Header selectedRoute={this.state.currentUrl} />
				<Router onChange={this.handleRoute}>
					<Dashboard path="/" />
					<ChatConsole path="/chat-console/" />
					<SurveyForm path="/survey-form/" />
					<ChatWithVisitors path="/chat-with-visitors/" />
					<Settings path="/settings/" />
					<Operators path="/operator/" user="me"/>
					<Operators path="/operator/:user" />
					<NotFound default />
				</Router>
			</div>
		);
	}
}

