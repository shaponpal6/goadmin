import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import List from "../../components/list";
import style from './style';

export default class SurveyForm extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>
				<h1>Dashboard</h1>
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">Dashboard card</h2>
						<div class=" mdc-typography--caption">Welcome to home route</div>
					</div>
					<div class={style.cardBody}>
						<List/>
					</div>
					<Card.Actions>
						<Card.ActionButton>OKAY</Card.ActionButton>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}
