import {h, Component} from 'preact';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

export default class ListPage extends Component {
  render(){
    return (
      <div>
        <List>
          <List.Item>Item1</List.Item>
          <List.Item>Item2</List.Item>
          <List.Item>Item3</List.Item>
          <List.Item>Item4</List.Item>
          <List.Item>Item5</List.Item>
        </List>
      </div>
    );
  }
}