import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SinglePost from './SinglePost.jsx'

class PostList extends Component {
	//get all the post data
  render() {
  	var postListData = [
  	  	{pid:20525, username: 'Too Yung', privacy: 1, date: '56-10-2020', textContent: 'Age is just a number', hasPic: false, picURL: ""},
  		{pid:10241, username: 'Bob Bobby', privacy: 2, date: '01-01-1990', textContent: 'Jail is just a room', hasPic: true, picURL: "https://i.imgflip.com/1ks3kw.jpg"}
  		]

  	var listOfPosts = postListData.map((post) => 
  		<li key={post.pid}>
  			<SinglePost 
  			username={post.username}
  			privacy={post.privacy}
  			date={post.date}
  			textContent={post.textContent}
  			hasPic={post.hasPic}
  			picURL={post.picURL}/>
  		</li>
  		)

  	return(
  		<ul className="post-list">
  			{listOfPosts}
  		</ul>
  		)
  }
  	
}

export default PostList