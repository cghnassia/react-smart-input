import React from 'react'

class InputSearchComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchString: ''
		};
	}

	onButtonClick() {
		//console.log(this.state)
		//this.setState({likesCount: this.state.likesCount + 1});
		this.props.onSearch(this.state.searchString);
	}

	onInputChange(event) {
		this.setState({
			searchString: event.target.value
		});
	}

	render() {
		return(
			<div className='input-search'>
				<input type="text" placeholder="search" onChange={this.onInputChange.bind(this)}/>
				<button onClick={this.onButtonClick.bind(this)}>Search!</button>
			</div>
		);
	}
}

export default InputSearchComponent;