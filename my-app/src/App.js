import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// var HelloMessage = React.createClass({
//   render: function() {
//     return <h1>Hello {this.props.name}</h1>
//   }
// });
let names = ['Alice', 'Emily', 'Kate'];
let arr = [
  <h1>你好</h1>,
  <h2>不好</h2>
];
//组件es6Class
class HelloMessage extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
};
//js函数组件
function Welcome(props) {
  return <h1>hello,{props.name}</h1>
};
class Children1 extends React.Component {
  render() { 
    return (
      <ol>{
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>
        })
      }
      </ol>
    )

  }
}
const element = React.createElement(
  'h1',
  { className: 'getting' },
  'hello!!!',
)

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {
            names.map(function (name, index) {
              return <div key={index}>hello,{name}</div>
            })
          }
        </div>
        <Children1>
          <span>hello</span>
          <span>world</span>
        </Children1>
        <Welcome name="马瑞泽" />
        <HelloMessage name="maruize" />
        <div>{arr}</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
