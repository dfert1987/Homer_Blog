import React, {useState, useEffect} from 'react';

function Replies(props) {
  const [allUsers, setAllUsers] = useState([]);
  const [av, setAv] = useState('');

  const getAvatar = (userID) => {
    fetch(`http://localhost:3000/users/${userID}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((response) => response.json())
      .then((result) => setAv(result.avatar));

    if (av) {
      return <img src={av} alt='avatar' />;
    }
  };

  const showReplies = () => {
    const oneReply = props.replies.map((reply) => {
      console.log(reply);
      return (
        <div className='reply'>
          <div className='image-reply'>
            {getAvatar(reply.userID)}
            <div className='reply-plus-username'>
              <p className='replier-username'>JerkHead99</p>
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
