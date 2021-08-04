import React, {useState, useEffect} from 'react';

function Comment(props) {
  const [avatar, setUserAvatar] = useState('');
  const [upvote, setUpVote] = useState(2);
  const [downvote, setDownVote] = useState(1);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [downVoteColor, setDownVoteColor] = useState('black_downvote');
  const [upVoteColor, setUpVoteColor] = useState('black_upvote');

  const setDVColor = () => {
    if (downVoteColor === 'black_downvote' && upVoteColor === 'black_upvote') {
      setDownVoteColor('red_downvote');
      setDownVote(downvote + 1);
    }
    if (downVoteColor === 'black_downvote' && upVoteColor === 'green_upvote') {
      setDownVoteColor('red_downvote');
      setUpVoteColor('black_upvote');
      setDownVote(downvote + 1);
      setUpVote(upvote - 1);
    }
    return null;
  };

  const setUVColor = () => {
    if (upVoteColor === 'black_upvote' && downVoteColor === 'black_downvote') {
      setUpVoteColor('green_upvote');
      setUpVote(upvote + 1);
    }
    if (upVoteColor === 'black_upvote' && downVoteColor === 'red_downvote') {
      setDownVoteColor('black_downvote');
      setUpVoteColor('green_upvote');
      setDownVote(downvote - 1);
      setUpVote(upvote + 1);
    }
    return null;
  };
  
  let uv_button_class =
    upVoteColor === 'black_upvote' ? 'black_upvote' : 'green_upvote';
  let dv_button_class =
    downVoteColor === 'black_downvote' ? 'black_downvote' : 'red_downvote';

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
    <div className='one-comment' id={`${props.comment.id}-remark`}>
      <div className='image-comment'>
        <img
          className='comment-avatar'
          src={avatar}
          alt='user-avatar'
          id={`${props.comment.id}-avatar`}
        />
        <div className='comment-plus-username' id={`${props.comment.id}`}>
          <p className='commenter-username' id={`${props.comment.id}-username`}>
            JOBO69
          </p>
          <p className='comment-text' id={`${props.comment.id}-text`}>
            {props.comment.comment}
          </p>
        </div>
      </div>
      <div className='response-options' id={`${props.comment.id}-options`}>
        <button
          className='reply-toggle'
          onClick={() => setShowReplyInput(!showReplyInput)}
        >
          Reply
        </button>
        <button className={uv_button_class} onClick={setUVColor}>
          <i className='far fa-thumbs-up'></i>
          {upvote}
        </button>
        <button className={dv_button_class} onClick={setDVColor}>
          <i class='far fa-thumbs-down'></i>
          {downvote}
        </button>
      </div>
    </div>
  );
}

export default Comment;
