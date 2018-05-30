import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Decrement extends Component{
	constructor(props){
		super(props)
		this.state = {
			num: this.props.num
		}
	}
	render(){
		return(
			<div>
				<span>{this.state.num}</span>
				<br />
				<button onClick={this.handleClick}>Decrement</button>
				<br />
			</div>
			)
	}

	handleClick=()=>{
		if(this.state.num > 0){
			this.setState({
			num: this.state.num - 1
		})

		}else{
			alert ('Max limit')
		}
	}
}


Decrement.propType = {
	num: PropTypes.number.isRequired
}

export default Decrement