import { h, Component } from "preact";
import store from "../../store/store";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";
import List from "../../components/list";
import Panel from "../../components/panel";
import style from "./style";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.setState(store.dashboard);
  }

  render(props, state) {
    console.log(props);
    console.log(state);
    return (
      <div class={`${style.home} page`}>
        <LayoutGrid>
          <h1>Dashboard</h1>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="3">
              <Panel text="Online Visitors" value={state.onlineVisitors} />
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3">
              <Panel text="Total Client" value={state.totalClients} />
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3">
              <Panel text="Total Operators" value={state.totalOperators} />
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3">
              <Panel text="Panding Actions" value={state.surveyData} />
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>

        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              <Card>
                <div class={style.cardHeader}>
                  <h2 class=" mdc-typography--title">Chat Activities</h2>
                  <div class=" mdc-typography--caption">
                    Show all chat Activities
                  </div>
                </div>
                <div class={style.cardBody}>
                  <List data={state.activities} />
                </div>
                <Card.Actions>
                  <Card.ActionButton>OKAY</Card.ActionButton>
                </Card.Actions>
              </Card>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="12">
              <p>All Right Reserved</p>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}
