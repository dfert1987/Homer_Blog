import React, {useState} from 'react';

function ReplyButtons() {
  const [upvote, setUpVote] = useState(0);
  const [downvote, setDownVote] = useState(0);
  const [downVoteColor, setDownVoteColor] = useState('black_downvote');
  const [upVoteColor, setUpVoteColor] = useState('black_upvote');

  const setDVColor = () => {
    if (downVoteColor === 'black_downvote' && upVoteColor === 'black_upvote') {
      setDownVoteColor('red_downvote');
      setDownVote(downvote + 1);
    }
    if (downVoteColor === 'red_downvote') {
      setDownVoteColor('black_downvote');
      setDownVote(downvote - 1);
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
      setUpVote(upvote - 1);
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
    upVoteColor === 'black_upvote'
      ? 'black_upvote-three'
      : 'green_upvote-three';
  let dv_button_class =
    downVoteColor === 'black_downvote'
      ? 'black_downvote-three'
      : 'red_downvote-three';

  return (
    <>
      <button className={uv_button_class} onClick={setUVColor}>
        <i className='far fa-thumbs-up'></i>
        {upvote}
      </button>
      <button className={dv_button_class} onClick={setDVColor}>
        <i className='far fa-thumbs-down'></i>
        {downvote}
      </button>
    </>
  );
}

export default ReplyButtons;