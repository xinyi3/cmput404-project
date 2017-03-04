import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SideMenu from './SideMenu.js'
import NewPost from './NewPost.js'
import PostList from './PostList.js'
import {Grid,Col,Row} from 'react-bootstrap'


var containerStyle = {
	
}

class App extends Component {
  render() {
    return (
    	<div className="container" style={containerStyle}>
	    	<Grid>
	    		<Row className="side-menu">
			    	<Col xs={3} md={3} >
			      		<SideMenu/>
			      	</Col>
			      	<Col xs={9} md={9} >
			      		<NewPost/>
			      		<PostList/>
			      	</Col>
			    </Row>
		    </Grid>
	    </div>

    )
  }
}

export default App
