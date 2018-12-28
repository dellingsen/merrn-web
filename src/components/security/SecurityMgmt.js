import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import Groups from './Groups'
import Roles from './Roles'
import Services from './Services'
import Resources from './Resources'
import Devices from './Devices'
import Nodes from './Nodes'
import Media from './Media'

class SecurityMgmt extends Component {

	render() {
		return (
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<h5><center>Configure system security settings</center></h5>
						</Col>
					</Row>
					<Row>
						<Col sm={2}></Col>
						<Col sm={10}>
							<div className="Navigation">
								<ul className="nav nav-tabs">
									<li role="presentation" className="nav-item"><a href="#groups" data-toggle="tab" className="nav-link">Groups</a></li>
									<li role="presentation" className="nav-item"><a href="#roles" data-toggle="tab" className="nav-link">Roles</a></li>
									<li role="presentation" className="nav-item"><a href="#services" data-toggle="tab" className="nav-link">Services</a></li>
									<li role="presentation" className="nav-item"><a href="#resources" data-toggle="tab" className="nav-link">Resources</a></li>
									<li role="presentation" className="nav-item"><a href="#media" data-toggle="tab" className="nav-link">Media</a></li>
									<li role="presentation" className="nav-item"><a href="#nodes" data-toggle="tab" className="nav-link">Nodes</a></li>
									<li role="presentation" className="nav-item"><a href="#devices" data-toggle="tab" className="nav-link">Devices</a></li>
								</ul>
								<br />
								<div className="tab-content">
									<div role="tabpanel" className="tab-pane" id="groups"><Groups /></div>
									<div role="tabpanel" className="tab-pane" id="roles"><Roles /></div>
									<div role="tabpanel" className="tab-pane" id="services"><Services /></div>
									<div role="tabpanel" className="tab-pane" id="resources"><Resources /></div>
									<div role="tabpanel" className="tab-pane" id="media"><Media /></div>
									<div role="tabpanel" className="tab-pane" id="nodes"><Nodes /></div>
									<div role="tabpanel" className="tab-pane" id="devices"><Devices /></div>
								</div>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default SecurityMgmt;