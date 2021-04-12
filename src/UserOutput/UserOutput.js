import React from 'react';

import './userOutput.css'

const userOutput = (props) => {
	return (
		<div className="UserOutput">
			<p>Username: {props.userName}</p>
			<p>Text to overwrite</p>
		</div>
	);
}

export default userOutput;