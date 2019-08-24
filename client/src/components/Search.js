import React from 'react';
import Department from './Department.js';
import Activities from './Activities.js';

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}



	render() {
		return (
			<div className="nav">
				<Department />
				<Activities />
			</ div>
		)
	}
}

export default Search;