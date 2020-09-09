import { h, Component } from "preact";
import Elevation from "preact-material-components/Elevation";
import "preact-material-components/Elevation/style.css";
import style from "./style";

export default class Panel extends Component {
  render(props) {
    return (
      <Elevation z={4}>
        <div class={style.panel}>
          <h4>{props.text}</h4>
          <h2>{props.value}</h2>
        </div>
      </Elevation>
    );
  }
}
