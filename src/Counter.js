import React, { Component } from "react";

class Counter extends Component{

	constructor(props){

		super(props);

		this.state = {
			counter: this.props.counter
		}
	}

updateCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
}

	render() {
		return (
			<div>
				Counter: {this.state.counter}
				<input type="button" value="click me" onClick={this.updateCounter} />

			</div>
			)
	}



}

export default Counter;