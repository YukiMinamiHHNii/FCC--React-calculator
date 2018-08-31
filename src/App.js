import React, { Component } from "react";
import "./App.css";
import Calcpad from "./Calcpad";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "0",
			nums: [],
			ops: [],
			result: "",
			queued: ""
		};
		this.clear = this.clear.bind(this);
		this.queueOperator = this.queueOperator.bind(this);
		this.calculate = this.calculate.bind(this);
		this.doCalculation = this.doCalculation.bind(this);
	}
	queueOperator(data) {
		console.log(this.state);
		this.setState(prevState => {
			if (data.type === "num") {
				return this.state.result.length === 1 && this.state.result === "0"
					? { input: data.value, result: data.value, queued: data.type }
					: {
							input: prevState.input.concat(data.value),
							result: prevState.input.concat(data.value),
							queued: data.type
					  };
			} else {
				if (data.type !== this.state.queued) {
					if (data.value === ".") {
						return !prevState.result.includes(".")
							? {
									input: prevState.input.concat(data.value),
									result: prevState.input.concat(data.value),
									queued: data.type
							  }
							: "";
					} else {
						return {
							input: "0",
							result: "0",
							//concat is used on the array because pop returns a new one instead of modifying the existent
							//could have used the spread operator as well
							nums: prevState.nums.concat(prevState.input),
							ops: this.state.ops.concat(data.value),
							queued: data.type
						}
					}
				}else{
					return {
							//concat is used on the array because pop returns a new one instead of modifying the existent
							//could have used the spread operator as well
							ops: prevState.ops.slice(0, prevState.ops.length-1).concat(data.value),
							queued: data.type
						};
				}
			}
		});
	}
	clear() {
		return this.setState({
			input: "0",
			result: "0",
			nums: [],
			ops: []
		});
	}
	calculate() {
		let calcNums = this.state.nums.concat(this.state.input),
			calcOperators = this.state.ops,
			result = calcNums[0];

		for (let x = 1; x < calcNums.length; x++) {
			result = this.doCalculation(
				calcOperators[x - 1],
				parseFloat(calcNums[x]),
				parseFloat(result)
			);
			console.log(result)
		}
		return this.setState({
			input: "0",
			result: result.toString(),
			nums: [result],
			ops: [],
			queued: "op"
		});
	}
	doCalculation(op, num, res) {
		switch (op) {
			case "+":
				res += num;
				break;
			case "-":
				res -= num;
				break;
			case "*":
				res *= num;
				break;
			case "/":
				res /= num;
				break;
			default:
				break;
		}
		return res;
	}
	render() {
		return (
			<div className="app">
				<div id="calc">
					<div className="display">
						<h3 id="display">{this.state.result}</h3>
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
