import React, {useState} from 'react';
import {Button} from '../Button/Button';
// dummy image
import smallAv from './meprofile.jpeg';
import './CommentsSection.css';

export default function Comments(props) {
  // this will be contained in upvote downvote container
  // initial values will be from props
  const [upvote, setUpVote] = useState(2);
  const [downvote, setDownVote] = useState(1);
  const [downVoteColor, setDownVoteColor] = useState('black_downvote');
  const [upVoteColor, setUpVoteColor] = useState('black_upvote');
  const [showReplyInput, setShowReplyInput] = useState(false);

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
  return (
    <div className='all-comments'>
      {/* fake example for layout purposes. Will need to map through all comments with a blog that matches this blog. */}
      <div className='one-comment'>
        <div className='commenter'>
          <img className='comment-avatar' src={smallAv} />
          <p className='commenter-username'>JOBO69</p>
        </div>
        <p className='comment-text'>
          This is the best article I have ever read!
        </p>
        <div className='response-options'>
          <button
            className='reply-toggle'
            onClick={() => setShowReplyInput(!showReplyInput)}
          >
            Reply
          </button>
          {/* these are going to need to be their own component 'comment' to render optimistically */}
          <button className={uv_button_class} onClick={setUVColor}>
            <i className='far fa-thumbs-up'></i>
            {upvote}
          </button>
          <button className={dv_button_class} onClick={setDVColor}>
            <i class='far fa-thumbs-down'></i>
            {downvote}
          </button>
        </div>
        {/* this is going to have to be it's own component 'replies' inwith component*/}
        {showReplyInput === true ? (
          <div className='reply-container'>
            <form className='reply-form'>
              <textarea
                className='reply-input'
                name='reply'
                rows='3'
                placeholder='Reply to user...'
              ></textarea>
              <div className='reply-submit-container'>
                <Button className='submit-reply'>REPLY</Button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}
