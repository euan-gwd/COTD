import React from 'react';
import { render } from 'react-dom';
import StorePicker from "./components/StorePicker";

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