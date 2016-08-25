import React from 'react'

class ResultListItemComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<span>{this.props.index + 1}</span>
				<div>{this.props.tweet.text}</div>
				<div>{this.props.tweet.user.name}</div>
			</div>
		);
	}
}

export default ResultListItemComponent;