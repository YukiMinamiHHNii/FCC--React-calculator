import React, { Component } from "react";
import "./App.css";
import Calcpad from "./Calcpad";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "0",
			output: "",
			nums: [],
			ops: []
		};
		this.clear = this.clear.bind(this);
		this.queueOperator = this.queueOperator.bind(this);
		this.calculate = this.calculate.bind(this);
	}
	queueOperator(data) {
		this.setState(prevState => {
			if (data.type === "num") {
				return this.state.input.length === 1 && this.state.input === "0"
					? { input: data.value, output: prevState.output }
					: {
							input: prevState.input.concat(data.value),
							output: prevState.output
					  };
			} else {
				if (data.value === ".") {
					return !prevState.input.includes(".")
						? {
								input: prevState.input.concat(data.value),
								output: prevState.output
						  }
						: "";
				} else {
					return {
						input: "0",
						output: prevState.output.concat(prevState.input.concat(data.value)),
						//concat is used on the array because pop returns a new one instead of modifying the existent
						//could have used the spread operator as well
						nums: prevState.nums.concat(prevState.input), 
						ops: prevState.ops.concat(data.value)
					};
				}
			}
		});
	}
	clear() {
		return this.setState({
			input: "0",
			output: ""
		});
	}
	calculate() {
		this.setState(prevState => {
			return {
				input: "0",
				output: ""
			};
		});
	}
	render() {
		return (
			<div className="app">
				<div id="calc">
					<div id="display">
						<h4>{this.state.output}</h4>
						<h3>{this.state.input}</h3>
					</div>
					<Calcpad
						input={this.queueOperator}
						clear={this.clear}
						calculate={this.calculate}
					/>
				</div>
			</div>
		);
	}
}

export default App;
