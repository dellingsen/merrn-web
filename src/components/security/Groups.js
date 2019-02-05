import React from 'react';
import { Row, Col } from 'react-bootstrap'

class Groups extends React.Component {

	render() {
		return (<div>
			<Row>
				<Col sm={0}></Col>
				<Col sm={12}>
					<h4>Configure Security Groups</h4>
				</Col>
			</Row>
		</div>)
	}
}

export default Groups;