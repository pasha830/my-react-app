import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Addition extends Component{
	constructor(props){
		super(props)
		this.state = {
			num1: this.props.num1,
			num2: this.props.num2,
			answer: ''
		}
	}
	render(){
		return(
			<div>
			<p>***Let's do simple math ***</p>
				<span>{this.state.num1}</span> + <span>{this.state.num2}</span>
				<br />
				<button onClick={this.handleClick}>Add</button>
				<br />
				<span>{this.state.answer}</span>
			</div>

			)
	}
	handleClick=()=>{
		this.setState({
			num1: this.state.num1,
			num2: this.state.num2,
			answer: this.state.num1 + this.state.num2

		})
	}
}



Addition.propType = {
	num1: PropTypes.number.isRequired,
	num2: PropTypes.number.isRequired,
}

export default Addition