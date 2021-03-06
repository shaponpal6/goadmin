import {h, Component} from 'preact';
import Chips from 'preact-material-components/Chips';
import 'preact-material-components/Chips/style.css';

export default class MenuBar extends Component {
  render(){
    return (
      <div>
        <Chips>
          <Chips.Chip>
            <Chips.Icon className="material-icons" leading>wb_sunny</Chips.Icon>
            <Chips.Text>Turn on lights</Chips.Text>
          </Chips.Chip>
          <Chips.Chip>
            <Chips.Icon className="material-icons" leading>bookmark</Chips.Icon>
            <Chips.Text>Bookmark</Chips.Text>
          </Chips.Chip>
          <Chips.Chip>
            <Chips.Icon className="material-icons" leading>alarm</Chips.Icon>
            <Chips.Text>Set alarm</Chips.Text>
          </Chips.Chip>
          <Chips.Chip>
            <Chips.Icon className="material-icons" leading>directions</Chips.Icon>
            <Chips.Text>Get directions</Chips.Text>
          </Chips.Chip>
        </Chips>
      </div>
    )
  }
}