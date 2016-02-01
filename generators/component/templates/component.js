import React from 'react';
import styles from './<%= ComponentName %>.css';

class <%= ComponentName %> extends React.Component {

	static propTypes = {
		children: React.PropTypes.any
	};

	render () {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}

}

export default <%= ComponentName %>;
