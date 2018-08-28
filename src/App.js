import React, { Component } from "react";
import "./App.css";
import Calcpad from "./Calcpad";

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			value: 0
		}
	}
  render() {
    return (
      <div className="app">
      	<div id="calc">
      		<div id="display">{this.state.value}</div>
      		<Calcpad/>
      	</div>
      </div>
    );
  }
}

export default App;
