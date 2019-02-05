import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

class Header extends Component {
    render() {

        return (
            <div className="Header">
            <Grid>
                <Row>
                <Col sm={12}><h3>MERRN Active Management System</h3></Col>
                </Row>
            </Grid>
            </div>
        );
    }
}

export default Header