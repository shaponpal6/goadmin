import { h, Component } from "preact";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";
import List from "../../components/list";
import Panel from "../../components/panel";
import style from "./style";

export default class ChatWithVisitors extends Component {
  render() {
    return (
      <div class={`${style.home} page`}>
        <LayoutGrid>
		<h1>Chat With Visitors</h1>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              <Card>
                <div class={style.cardHeader}>
                  <h2 class=" mdc-typography--title">121 Visitors are Online </h2>
                  <div class=" mdc-typography--caption">
                    Show all chat Activities
                  </div>
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
