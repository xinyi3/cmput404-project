import React, {Component, PropTypes} from 'react';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  render() {
    return (
      <div className='friend-page'>
        <div className='friend-requests'>
          {this.props.friendRequests.map(friend => <FriendListItem key={friend.id}
          {
            ...friend}/>)
          }
        </div>
        <div className='friend-list'>
          {this.props.friends.map(friend => <FriendListItem key={friend.id} 
          {
            ...friend}/>)
          }
        </div>
      </div>
    );
  }
}

FriendList.propTypes = {
  friendRequests: PropTypes.array.isRequired,
  friends: PropTypes.array.isRequired
};

export default FriendList;