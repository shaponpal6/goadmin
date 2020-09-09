import { h, Component } from "preact";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";
import List from "../../components/list";
import Panel from "../../components/panel";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import style from "./style";

export default class Archive extends Component {
  render() {
    return (
      <div class={`${style.home} page`}>
        <LayoutGrid>
          <div class={style.surveyHeader}>
            <h2 class={style.surveyHeaderTitle}>Survey Form</h2>
            <Button raised className="mdc-theme--secondary-bg">
              Add New
            </Button>
          </div>
        </LayoutGrid>

        <div class={style.surveyForm}>
          <LayoutGrid>
            <LayoutGrid.Inner>
              <LayoutGrid.Cell cols="12">
                <Card>
                  <div class={style.cardHeader}>
                    <h2 class=" mdc-typography--title">Form Name: one</h2>
                    <div class=" mdc-typography--caption">Survey Form List</div>
                  </div>
                  <div class={style.cardBody}>
                    <List />
                  </div>
                  <Card.Actions>
                    <Card.ActionButton>OKAY</Card.ActionButton>
                  </Card.Actions>
                </Card>
              </LayoutGrid.Cell>
            </LayoutGrid.Inner>
          </LayoutGrid>
        </div>

        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              <Card>
                <div class={style.cardHeader}>
                  <h2 class=" mdc-typography--title">Survey Form List</h2>
                  <div class=" mdc-typography--caption">Survey Form List</div>
                </div>
                <div class={style.cardBody}>
                  <List />
                </div>
                <Card.Actions>
                  <Card.ActionButton>OKAY</Card.ActionButton>
                </Card.Actions>
              </Card>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="12">
              <p>All Right </p>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}
