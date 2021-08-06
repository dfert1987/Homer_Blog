import React, {useState} from 'react';

function Replies(props) {
  const [av, setAv] = useState('');
  const [userName, setUsername] = useState('');

  const getAvatar = (userID) => {
    fetch(`http://localhost:3000/users/${userID}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((response) => response.json())
      .then((result) => setAv(result.avatar));

    if (av) {
      return <img src={av} alt='avatar' className='reply-avatar' />;
    }
  };

  const getUsername = (userID) => {
    fetch(`http://localhost:3000/users/${userID}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((response) => response.json())
      .then((result) => setUsername(result.username));

    if (userName) {
      return userName;
    }
  };

  const showReplies = () => {
    const oneReply = props.replies.reverse().map((reply) => {
      console.log(reply);
      return (
        <div className='reply'>
          <div className='image-reply'>
            {getAvatar(reply.userID)}
            <div className='reply-plus-username'>
              <p className='replier-username'>{getUsername(reply.userID)}</p>
              <p className='reply-text'>{reply.reply}</p>
              <div className='reply-vote-options'></div>
            </div>
          </div>
        </div>
      );
    });
    return oneReply;
  };

  return <div>{showReplies()}</div>;
}

export default Replies;
