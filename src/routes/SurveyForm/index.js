import { h, Component } from "preact";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import List from "../../components/list";
import SurveyForm1 from "../../components/survey-form";
import style from "./style";

export default class SurveyForm extends Component {
  render() {
    return (
      <div class={`${style.home} page`}>
        <h1>Survey Form</h1>
        <Card>
          <div class={style.cardHeader}>
            <h2 class=" mdc-typography--title">Add New Survey Form</h2>
            <div class=" mdc-typography--caption">Add New Survey Form to collect data from your visitors.</div>
          </div>
          <div class={style.cardBody}>
		  <SurveyForm1 />
          </div>
          <Card.Actions>
            <Card.ActionButton>Save</Card.ActionButton>
          </Card.Actions>
        </Card>

		<h2 class=" mdc-typography--title">Form List</h2>
		<Card>
          <div class={style.cardHeader}>
            <div class=" mdc-typography--caption">Welcome to home route</div>
          </div>
          <div class={style.cardBody}>
		  <List />
          </div>
          <Card.Actions>
            <Card.ActionButton>OKAY</Card.ActionButton>
          </Card.Actions>
        </Card>
      </div>
    );
  }
}
