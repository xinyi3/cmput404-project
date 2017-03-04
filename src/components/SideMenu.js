import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class SideMenu extends Component {
  render() {

    return (

      <div className="side-menu-sidebar">
      {/*cite: http://bootsnipp.com/snippets/featured/user-profile-sidebar*/}
        {/* SIDEBAR USERPIC */}
        <div className="side-menu-userpic">
          <img src="https://openclipart.org/download/222252/feels.svg" className="img-responsive" alt />
        </div>
        {/* END SIDEBAR USERPIC */}
        {/* SIDEBAR USER TITLE */}
        <div className="side-menu-usertitle">
          <div className="side-menu-usertitle-name">
           Feels Bad Man
          </div>
    
        </div>
        {/* END SIDEBAR USER TITLE */}
        {/* SIDEBAR BUTTONS */}
        <div className="side-menu-userbuttons">
          <button type="button" className="btn btn-success btn-sm">Follow</button>
          <button type="button" className="btn btn-danger btn-sm">Message</button>
        </div>
        {/* END SIDEBAR BUTTONS */}
        {/* SIDEBAR MENU */}
        <div className="side-menu-usermenu">
          <ul className="nav">
            <li className="active">
              <a href="#">
                <i className="glyphicon glyphicon-home" />
                Overview </a>
            </li>
            <li>
              <a href="#">
                <i className="glyphicon glyphicon-user" />
                Account Settings </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="glyphicon glyphicon-ok" />
                Tasks </a>
            </li>
            <li>
              <a href="#">
                <i className="glyphicon glyphicon-flag" />
                Help </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SideMenu
