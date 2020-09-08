import { h, Component } from "preact";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";
import Select from "preact-material-components/Select";
import "preact-material-components/List/style.css";
import "preact-material-components/Menu/style.css";
import "preact-material-components/Select/style.css";

export default class TextFieldPage extends Component {
  render() {
    return (
      <div>
        <TextField label="Form Name" outlined />
    
       <Select
       outlined
         hintText="Select a Form"
         selectedIndex={this.state.chosenIndex}
         onChange={(e) => {
           this.setState({
             chosenIndex: e.target.selectedIndex,
           });
         }}
       >
         <Select.Item>opt1</Select.Item>
         <Select.Item>opt2</Select.Item>
         <Select.Item>opt3</Select.Item>
         <Select.Item>opt4</Select.Item>
       </Select>
     </div>
    );
  }
}
