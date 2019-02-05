import React from 'react';

class IndexPage extends React.Component {

	render() {
		return (<div>
			<h4>Welcome to the MERRN app - please choose a menu option.</h4>
			<p style={{textAlign:"left"}}><span>
				MERRN stands for MongoDB Express React Redux Node, which more precisely means that this is a React application that uses 
				Redux to manage state, along with a Node server application with an Express REST API to save and retrieve data from 
				Mongo NoSQL database.<br/><br/>
				I use this architecture as an application template for Fullstack React/Node applications. It's a great starting point with
				a lot of useful libraries that are needed for building a functional UI that communicates with a REST API server.<br/>
				This application also has the correct CORS logic so it's ready to be deployed in a production environment on a scalable instance 
				behind a proxy.<br/>
				It's light enough to start adding custom fuctionality at any level in the app, but also contains complete patterns that 
				can be used right away, or updated, or even replaced without too much work. 
				It allows for multiple options for building the UI, UI themes, navigation, action/service layer, user authentication, 
				role management, validation, etc. <br/>
				</span></p>
		</div>
		)
	}
}

export default IndexPage;