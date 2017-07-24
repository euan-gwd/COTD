import React from 'react';
import { render } from 'react-dom';
import StorePicker from "./components/StorePicker";
import './css/style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <StorePicker />
      </div>
    );
  }
}

render(<App />, document.querySelector('#main'));