import { h, Component } from "preact";
import { route } from "preact-router";
import Chips from "preact-material-components/Chips";
import "preact-material-components/Chips/style.css";

export default class MenuBar extends Component {
  linkTo = (path) => () => {
    route(path);
  };

  goHome = this.linkTo("/");
  goToMyProfile = this.linkTo("/profile");

  render(props) {
    return (
      <div>
        <Chips>
          <Chips.Chip
            selected={props.selectedRoute === "/"}
            onClick={this.linkTo("/")}
          >
            <Chips.Icon className="material-icons" leading>
              dashboard
            </Chips.Icon>
            <Chips.Text>Dashboard</Chips.Text>
          </Chips.Chip>
          <Chips.Chip
            selected={props.selectedRoute === "/chat-with-visitors"}
            onClick={this.linkTo("/chat-with-visitors")}
          >
            <Chips.Icon className="material-icons" leading>
              fiber_smart_record
            </Chips.Icon>
            <Chips.Text>Chat With Visitors</Chips.Text>
          </Chips.Chip>
          <Chips.Chip
            selected={props.selectedRoute === "/chat-console"}
            onClick={this.linkTo("/chat-console")}
          >
            <Chips.Icon className="material-icons" leading>
              chat
            </Chips.Icon>
            <Chips.Text>Chat Console</Chips.Text>
          </Chips.Chip>
          <Chips.Chip
            selected={props.selectedRoute === "/survey-form"}
            onClick={this.linkTo("/survey-form")}
          >
            <Chips.Icon className="material-icons" leading>
              text_format
            </Chips.Icon>
            <Chips.Text>Survey Form</Chips.Text>
          </Chips.Chip>
          <Chips.Chip
            selected={props.selectedRoute === "/go-archived"}
            onClick={this.linkTo("/go-archived")}
          >
            <Chips.Icon className="material-icons" leading>
              archive
            </Chips.Icon>
            <Chips.Text>Go Archived</Chips.Text>
          </Chips.Chip>
          <Chips.Chip
            selected={props.selectedRoute === "/settings"}
            onClick={this.linkTo("/settings")}
          >
            <Chips.Icon className="material-icons" leading>
              settings
            </Chips.Icon>
            <Chips.Text>Settings</Chips.Text>
          </Chips.Chip>
          <Chips.Chip
            selected={props.selectedRoute === "/operator/:user"}
            user="Shapon"
            onClick={this.linkTo("/operator")}
          >
            <Chips.Icon className="material-icons" leading>
              verified_user
            </Chips.Icon>
            <Chips.Text>Operators</Chips.Text>
          </Chips.Chip>
        </Chips>
      </div>
    );
  }
}
