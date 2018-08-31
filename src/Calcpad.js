import React from "react";

class Calcpad extends React.Component{
	constructor(props){
		super(props);
		this.queueOnClick= this.queueOnClick.bind(this);
	}
	queueOnClick(e){
		this.props.input({value: e.target.value, type: new RegExp("\\d").test(e.target.value)?"num":"op"});
	}
	render(){
		return (
			<div id="pad">
      	<button id="zero" className="number" value="0" onClick={this.queueOnClick}>0</button>
      	<button id="one" className="number" value="1" onClick={this.queueOnClick}>1</button>
      	<button id="two" className="number" value="2" onClick={this.queueOnClick}>2</button>
      	<button id="three" className="number" value="3" onClick={this.queueOnClick}>3</button>
      	<button id="four" className="number" value="4" onClick={this.queueOnClick}>4</button>
      	<button id="five" className="number" value="5" onClick={this.queueOnClick}>5</button>
      	<button id="six" className="number" value="6" onClick={this.queueOnClick}>6</button>
      	<button id="seven" className="number" value="7" onClick={this.queueOnClick}>7</button>
      	<button id="eight" className="number" value="8" onClick={this.queueOnClick}>8</button>
      	<button id="nine" className="number" value="9" onClick={this.queueOnClick}>9</button>
      	<button id="decimal" className="number" value="." onClick={this.queueOnClick}>.</button>
      	<button id="add" className="operator" value="+" onClick={this.queueOnClick}>+</button>
      	<button id="subtract" className="operator" value="-" onClick={this.queueOnClick}>-</button>
      	<button id="multiply" className="operator" value="*" onClick={this.queueOnClick}>*</button>
      	<button id="divide" className="operator" value="/" onClick={this.queueOnClick}>/</button>
      	<button id="equals" className="operator" value="=" onClick={this.props.calculate}>=</button>
      	<button id="clear" className="operator" value="cls" onClick={this.props.clear}>Clear</button>
			</div>
		);
	}
}

export default Calcpad;