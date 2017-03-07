import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import CreatePost from './CreatePost';
import PostList from './PostList';
import Sidebar from './Sidebar';
import '../../style/style.scss';
import * as actions from '../actions';

class App extends Component {
  render() {
    return (
      <div className='coolbears-app'>
        <Grid>
          <Row>
            <Col md={3}>
              <Sidebar/>
            </Col>
            <Col md={9}>
              <CreatePost
                addPost={this.props.addPost}
              />
              <PostList
                posts={this.props.posts}
                addComment={this.props.addComment}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  addComment: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};
// TODO: Temporary, get this from somewhere else
const user = {
  id: 83757,
  name: 'Batman'
};
// TODO: Move this into seperate file as container
export default connect(
  function(stateProps, ownProps) {
    return {
      posts: stateProps.posts
    };
  }, function(dispatch, ownProps) {
  return {
    addComment: function(text, postId) {
      dispatch(actions.addComment(text, postId, user));
    },
    addPost: function(text, textFormat) {
      dispatch(actions.addPost(text, textFormat, user));
    },
  };
})(App);
