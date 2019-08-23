import React from 'react';
import Department from './Department.js'

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="nav">
				<Department />
			</div>
		)
	}
}

export default Search;