import React, { Component, PropTypes } from 'react';
import {ListGroup, ListGroupItem, Nav, NavItem} from 'react-bootstrap';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      key:1
    };
    this.handleSelect=this.handleSelect.bind(this);
  }
  handleSelect(key) {
    // alert('selected ' + selectedKey);
    this.setState({key:key});
  }

  render() {
    return (
      <div className='sidebar'>
        <h1>Coolbears</h1>
        {/*<ListGroup>
          <ListGroupItem>Stream</ListGroupItem>
          <ListGroupItem>Following</ListGroupItem>
        </ListGroup>*/}

        <Nav 
          bsStyle="pills" 
          stacked
          activeKey={this.state.key}
          onSelect={this.handleSelect}>
          <NavItem 
           eventKey={1} >Stream</NavItem>
          <NavItem 
           eventKey={2} >Following</NavItem>
        </Nav>
      </div>
    );
  }
}


export default Sidebar;