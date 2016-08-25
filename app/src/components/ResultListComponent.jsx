import React from 'react'
import ResultListItemComponent from './ResultListItemComponent.jsx';

class ResultListComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="result-list">
				<div className="result-count">{this.props.tweets.length} result(s)</div>
				{this.props.tweets.map((tweet, i) => {
					return (<ResultListItemComponent tweet={tweet} index={i} key={tweet.id} />)
				})}
			</div>
		);
	}
}

export default ResultListComponent;