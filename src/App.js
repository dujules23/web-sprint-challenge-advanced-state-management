import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "./actions";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {

  // call the fetchSmurfs action when the component loads
  componentDidMount (){
    this.props.fetchSmurfs();
  }
  

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapDispatch = { fetchSmurfs }
// connect the fetchSmurfs action to the App component.
export default connect(null, mapDispatch)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.