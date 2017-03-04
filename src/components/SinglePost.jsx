import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class SinglePost extends Component {
	render() {
		var privacySettings = ["Private", "Followers", "Shared Publicly"]
		var postPrivacy = privacySettings[this.props.privacy]
		//css from http://bootsnipp.com/snippets/featured/google-plus-styled-post
	  	if(!this.props.hasPic){
	  		return (
	  			<div className="post-container">
		            <div className="[ panel panel-default ] panel-google-plus">
		              <div className="panel-heading">
		                <img className="[ img-circle pull-left ]" src="https://lh3.googleusercontent.com/-CxXg7_7ylq4/AAAAAAAAAAI/AAAAAAAAAQ8/LhCIKQC5Aq4/s46-c-k-no/photo.jpg" alt="Mouse0270" />
		                <h3>{this.props.username}</h3>	
		                <h5><span>{postPrivacy}</span> - <span>{this.props.date}</span> </h5>
		              </div>
		              <div className="panel-body">
		                <p>{this.props.textContent}</p>
		              </div>
		              <div className="panel-footer">
		                <button type="button" className="[ btn btn-default ]">
		                  <span className="[ glyphicon glyphicon-share-alt ]" />
		                </button>
		                <div className="input-placeholder">Add a comment...</div>
		              </div>
		              <div className="panel-google-plus-comment">
		                <img className="img-circle" src="https://lh3.googleusercontent.com/uFp_tsTJboUY7kue5XAsGA=s46" alt="User Image" />
		                <div className="panel-google-plus-textarea">
		                  <textarea rows={4} defaultValue={""} />
		                  <button type="submit" className="[ btn btn-success disabled ]">Post comment</button>
		                  <button type="reset" className="[ btn btn-default ]">Cancel</button>
		                </div>
		                <div className="clearfix" />
		              </div>
		            </div>
		        </div>
	  			)
	  	}else{
		    return (
		    	<div className="post-container">
		            <div className="[ panel panel-default ] panel-google-plus">
		              <div className="panel-heading">
		                <img className="[ img-circle pull-left ]" src="https://lh3.googleusercontent.com/-CxXg7_7ylq4/AAAAAAAAAAI/AAAAAAAAAQ8/LhCIKQC5Aq4/s46-c-k-no/photo.jpg" alt="Mouse0270" />
		                <h3>{this.props.username}</h3>
		                <h5><span>{postPrivacy}</span> - <span>{this.props.date}</span> </h5>
		              </div>
		              <div className="panel-body">
		                <p>{this.props.textContent}</p>
		                <a className="panel-google-plus-image" href={this.props.picURL}>
		                  <img src={this.props.picURL} />
		                </a>
		              </div>
		              <div className="panel-footer">
		                <button type="button" className="[ btn btn-default ]">
		                  <span className="[ glyphicon glyphicon-share-alt ]" />
		                </button>
		                <div className="input-placeholder">Add a comment...</div>
		              </div>
		              <div className="panel-google-plus-comment">
		                <img className="img-circle" src="https://lh3.googleusercontent.com/uFp_tsTJboUY7kue5XAsGA=s46" alt="User Image" />
		                <div className="panel-google-plus-textarea">
		                  <textarea rows={4} defaultValue={""} />
		                  <button type="submit" className="[ btn btn-success disabled ]">Post comment</button>
		                  <button type="reset" className="[ btn btn-default ]">Cancel</button>
		                </div>
		                <div className="clearfix" />
		              </div>
		            </div>
		          </div>
		    )
		}
	  
	}
}
export default SinglePost