/*
Snippets License (MIT license)
Copyright (c) 2013 Bootsnipp.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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
