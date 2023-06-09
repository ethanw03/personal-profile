import React from 'react';
import './Mail.sass';

function Mail() {
	return (
		<div class='frame'>
			<input type='checkbox' id='chck' />
			<label for='chck' class='button'>
				send
			</label>
			<label for='chck' class='button reset'>
				Reset
			</label>

			<div class='circle'></div>
			<div class='circle-outer'></div>

			<svg class='icon mail'>
				<polyline points='119,1 119,69 1,69 1,1'></polyline>
				<polyline points='119,1 60,45 1,1 119,1'></polyline>
			</svg>

			<svg class='icon plane'>
				<polyline points='119,1 1,59 106,80 119,1'></polyline>
				<polyline points='119,1 40,67 43,105 69,73'></polyline>
			</svg>
		</div>
	);
}

export default Mail;
