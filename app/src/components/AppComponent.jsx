import React from 'react'
import InputSearchComponent from './InputSearchComponent.jsx';

class AppComponent extends React.Component {
	constructor(props) {
		super(props)
	}

	onSearch(element) {
		console.log(element)
	}

	render() {
		return(
			<div>
				<InputSearchComponent onSearch={this.onSearch.bind(this)}/>
			</div>
		);
	}
}

export default AppComponent;