import React, {useState, useEffect} from 'react';

function Comment(props) {
  const [avatar, setUserAvatar] = useState('');
  console.log(props)

  useEffect(() => {
    if (props.allUsers) {
      const user = props.allUsers.find(
        (user) => user.id === props.comment.userID
      );
      setUserAvatar(user.avatar);
    }
    return null;
  }, [props.allUsers, props.comment.userID]);

  return (
    <div className='one-comment' id={`${props.comment.id}-remark`} >
      <div className='commenter' id={`${props.comment.id}-commenter`} >
        <img className='comment-avatar' src={avatar} alt='user-avatar' id={`${props.comment.id}-avatar`}  />
        <p className='commenter-username' id={`${props.comment.id}-username`} >JOBO69</p>
      </div>
      <p className='comment-text' id={`${props.comment.id}-text`} >{props.comment.comment}</p>
      <div className='response-options' id={`${props.comment.id}-options`} >
        {/* <button
          className='reply-toggle'
          onClick={() => setShowReplyInput(!showReplyInput)}
        >
          Reply
        </button> */}
      </div>
    </div>
  );
}

export default Comment;
