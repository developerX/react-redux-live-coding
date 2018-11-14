import React, { Component } from 'react';
//imports connect so component can use the redux store
import { connect } from 'react-redux';

//imports all actions from actions file
import * as actions from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.updateName(this.state.name)
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input type="text" name="name" onChange={(e) =>  this.props.updateName(e.target.value)}/>
          <button type="submit" onClick={this.onSubmit}>Submit</button> 
        </form>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.name}
          </a>
        </header>
      </div>
    );
  }
}
// maps redux state to props of the current component 
const mapStateToProps = (state) => {
  return {
    ...state
  }
}

// uses the connect from react-redux to connect to redux store
export default connect(mapStateToProps, actions)(App);
