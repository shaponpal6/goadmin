import { h, Component } from "preact";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";
import List from "../../components/list";
import Panel from "../../components/panel";
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';
import style from "./style";

export default class ChatConsole extends Component {
  render() {
    return (
      <div class={`${style.home} page`}>
        <LayoutGrid>
		<h1>Settings</h1>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="3">
              <Card>
                <div class={style.consoleHeader}>
                  <LayoutGrid.Inner>
                    <LayoutGrid.Cell cols="4">
                      <Card.ActionButton>My Chat</Card.ActionButton>
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell cols="4">
                      <Card.ActionButton>My Chat</Card.ActionButton>
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell cols="4">
                      <Card.ActionButton>My Chat</Card.ActionButton>
                    </LayoutGrid.Cell>
                  </LayoutGrid.Inner>
                </div>
                <div class={style.consoleBody}>
                  <List />
                </div>
                <Card.Actions>
                  <Card.ActionButtons>
                    <Card.ActionButton>OK</Card.ActionButton>
                  </Card.ActionButtons>
                  <Card.ActionIcons>
                    <Card.ActionIcon>share</Card.ActionIcon>
                  </Card.ActionIcons>
                </Card.Actions>
              </Card>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="9">
              <Card>
                <div class={style.consoleHeader}>
				<Card.Actions>
                  <Card.ActionButtons>
                    <Card.ActionButton>SHAPON PAL</Card.ActionButton>
                  </Card.ActionButtons>
                  <Card.ActionIcons>
                    <Card.ActionIcon>settings</Card.ActionIcon>
                  </Card.ActionIcons>
                </Card.Actions>
                </div>
                <div class={style.consoleBody}>
                  <List />
                </div>
                <Card.Actions>
				<TextField textarea={true} label="Write here" />
                  <Card.ActionButtons>
                    <Card.ActionButton>Send</Card.ActionButton>
                  </Card.ActionButtons>
                </Card.Actions>
              </Card>
            </LayoutGrid.Cell>
           
		  </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}
