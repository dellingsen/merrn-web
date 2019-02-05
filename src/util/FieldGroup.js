import React from 'react';
import {
	FormGroup,
	FormControl,
	ControlLabel,
	HelpBlock,
	Col,
} from 'react-bootstrap'

export const FieldGroup = ({ id, label, help, ...props }) => {
	return (
		<FormGroup controlId={id}>
			<Col componentClass={ControlLabel} sm={4}>
				{label}
			</Col>
			<Col sm={6}>
				<FormControl {...props} />
				{help && <HelpBlock>{help}</HelpBlock>}
			</Col>
		</FormGroup>
	);
}