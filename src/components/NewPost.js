import React, { Component } from 'react'
import ReactDOM from 'react-dom'



class NewPost extends Component {
  render() {
    return (
      <div className="widget-area no-padding blank">
        <div className="status-upload">
          <form>
            <textarea placeholder="What are you doing right now?" defaultValue={""} />
            <ul>
              <li><a title data-toggle="tooltip" data-placement="bottom" data-original-title="Audio"><i className="fa fa-music" /></a></li>
              <li><a title data-toggle="tooltip" data-placement="bottom" data-original-title="Video"><i className="fa fa-video-camera" /></a></li>
              <li><a title data-toggle="tooltip" data-placement="bottom" data-original-title="Sound Record"><i className="fa fa-microphone" /></a></li>
              <li><a title data-toggle="tooltip" data-placement="bottom" data-original-title="Picture"><i className="fa fa-picture-o" /></a></li>
            </ul>
            <button type="submit" className="btn btn-success green"><i className="fa fa-share" /> Share</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewPost
