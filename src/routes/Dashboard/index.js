import { h, Component } from "preact";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";
import Elevation from 'preact-material-components/Elevation';
import 'preact-material-components/Elevation/style.css';
import List from "../../components/list";
import Panel from "../../components/panel";
import style from "./style";

export default class Dashboard extends Component {
  render() {
    return (
      <div class={`${style.home} page`}>
        <h1>Dashboard</h1>
		<LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="3"><Panel text="Online Visitors" value="21212"/></LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3"><Panel text="Online Visitors" value="21212"/></LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3"><Panel text="Online Visitors" value="21212"/></LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3"><Panel text="Online Visitors" value="21212"/></LayoutGrid.Cell>
		
          </LayoutGrid.Inner>
        </LayoutGrid>
        <Card>
          <div class={style.cardHeader}>
            <h2 class=" mdc-typography--title">Dashboard card</h2>
            <div class=" mdc-typography--caption">Welcome to home route</div>
          </div>
          <div class={style.cardBody}>
            <List />
          </div>
          <Card.Actions>
            <Card.ActionButton>OKAY</Card.ActionButton>
          </Card.Actions>
        </Card>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="2"><Elevation z={4}>Z2</Elevation></LayoutGrid.Cell>
            <LayoutGrid.Cell cols="4"><Elevation z={4}>Z2</Elevation></LayoutGrid.Cell>
            <LayoutGrid.Cell cols="2"><Elevation z={4}>Z2</Elevation></LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}
