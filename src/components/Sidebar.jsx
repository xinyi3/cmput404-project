import React, { Component, PropTypes } from 'react';
import {ListGroup, ListGroupItem, Nav, NavItem} from 'react-bootstrap';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key:1
    };
    this.handleSelect=this.handleSelect.bind(this);
  }
  handleSelect(key) {
    this.setState({key:key});
    if (key == 1){
      this.props.updateContent("posts-list");
    }else if (key == 2){
      this.props.updateContent("friends-list");
    }
   
  }

  render() {
    return (
      <div className='sidebar'>
        <h1>Coolbears</h1>

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

Sidebar.propTypes = {
  updateContent: PropTypes.func.isRequired,
};

export default Sidebar;