import React, { Component } from 'react';
import CreatePost from './CreatePost';
import '../../style/style.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <CreatePost/>
      </div>
    );
  }
}

export default App;
