import React, {useState, useEffect} from 'react';
import {Button} from '../Button/Button';

function Comment(props) {
  const [avatar, setUserAvatar] = useState('');
  const [upvote, setUpVote] = useState(2);
  const [downvote, setDownVote] = useState(1);
  const [downVoteColor, setDownVoteColor] = useState('black_downvote');
  const [upVoteColor, setUpVoteColor] = useState('black_upvote');
  const [replyInput, setReplyInput] = useState(false);
  const [userReply, setUserReply] = useState('');

  const setDVColor = () => {
    if (downVoteColor === 'black_downvote' && upVoteColor === 'black_upvote') {
      setDownVoteColor('red_downvote');
      setDownVote(downvote + 1);
    }
    if (downVoteColor === 'red_downvote') {
      setDownVoteColor('black_downvote');
      setDownVote(downvote - 1)
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
    if (upVoteColor === 'green_upvote') {
      setUpVoteColor('black_upvote');
      setUpVote(upvote - 1)
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
    upVoteColor === 'black_upvote' ? 'black_upvote-two' : 'green_upvote-two';
  let dv_button_class =
    downVoteColor === 'black_downvote'
      ? 'black_downvote-two'
      : 'red_downvote-two';

  useEffect(() => {
    if (props.allUsers !== []) {
      const user = props.allUsers.find(
        (user) => user.id === props.comment.userID
      );
      setUserAvatar(user.avatar);
    }
    return null;
  }, [props.allUsers, props.comment.userID]);

  const submitReply = (e) => {
    e.preventDefault();
    setReplyInput(false);
  };

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
          <div className='response-options' id={`${props.comment.id}-options`}>
            <button
              className='reply-toggle'
              onClick={() => setReplyInput(!replyInput)}
            >
              Reply
            </button>
            <button className={uv_button_class} onClick={setUVColor}>
              <i className='far fa-thumbs-up'></i>
              {upvote}
            </button>
            <button className={dv_button_class} onClick={setDVColor}>
              <i className='far fa-thumbs-down'></i>
              {downvote}
            </button>
          </div>
        </div>
      </div>
      {replyInput ? (
        <form className='reply-form' onSubmit={submitReply}>
          <textarea
            className='comment-reply-input'
            placeholder='Reply here...'
            type='text'
            rows='8'
            columns='3'
            name='userReply'
            onChange={(e) => setUserReply(e.target.value)}
          ></textarea>
          <div className='reply-button-container'>
            <div className='submit-reply-container'>
              <Button
                className='submit-reply'
                buttonStyle='btn--outline3'
                type='submit'
              >
                SUBMIT
              </Button>
            </div>
            <div className='submit-cancel-container'>
              <Button
                className='submit-cancel'
                buttonStyle='btn--outline3'
                type='button'
                onClick={() => setReplyInput(false)}
              >
                CLOSE
              </Button>
            </div>
          </div>
        </form>
      ) : null}
      <hr className='comment-divider' />
    </div>
  );
}

export default Comment;
