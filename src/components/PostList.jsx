import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PostList extends Component {
  render() {
  	//layout from http://bootsnipp.com/snippets/featured/google-plus-styled-post
  	var noPic = false;
  	if(noPic){
  		return (
  			<div className="post-container">
	            <div className="[ panel panel-default ] panel-google-plus">
	              <div className="panel-heading">
	                <img className="[ img-circle pull-left ]" src="https://lh3.googleusercontent.com/-CxXg7_7ylq4/AAAAAAAAAAI/AAAAAAAAAQ8/LhCIKQC5Aq4/s46-c-k-no/photo.jpg" alt="Mouse0270" />
	                <h3>Bob Bobby</h3>	
	                <h5><span>Shared publicly</span> - <span>Jun 27, 2018</span> </h5>
	              </div>
	              <div className="panel-body">
	                <p>Do people born in 2000 get to choose if they are Generation Y or Generation Z? How do you decide what generation you want to belong to?</p>
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
	                <h3>Bob Bobby</h3>
	                <h5><span>Shared publicly</span> - <span>Jun 25, 2018</span> </h5>
	              </div>
	              <div className="panel-body">
	                <p>Just created a new snippet inspired by the Svbtle Menu. Find it here: <a href="http://bootsnipp.com/snippets/MaWrA">http://bootsnipp.com/snippets/MaWrA</a></p>
	                <a className="panel-google-plus-image" href="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg">
	                  <img src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg" />
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

export default PostList