import React, {Component, PropTypes} from 'react';
import {Panel, Button, Glyphicon} from 'react-bootstrap';

class FriendListItem extends Component {
  createGlyphiconButton(glyph) {
    return (
      <Button>
        <Glyphicon glyph={glyph}/>
      </Button>
    );
  }
  render() {
    return (
      <div className='friend-list-item'>
        <Panel>
          <span>{this.props.username}</span>
          <span>
            {this.props.isFollower && this.createGlyphiconButton('ok')}
            {this.props.isFollower && this.createGlyphiconButton('remove')}
          </span>
        </Panel>
      </div>
    );
  }
}

FriendListItem.propTypes = {
  isFollower: PropTypes.bool,
  username: PropTypes.string.isRequired
};

export default FriendListItem;