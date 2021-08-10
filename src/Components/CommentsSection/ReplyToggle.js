import React, {useState, useEffect} from 'react';
import Replies from './Replies';

function ReplyToggle(props) {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    let isUnmount = false;

    const filterReplies = (data) => {
      if (data) {
        const filteredReplies = data.filter(
          (reply) => reply.commentID === props.comment.id
        );
        setReplies(filteredReplies);
      }
    };

    const fetchReplies = async () => {
      const response = await fetch('http://localhost:3000/reps');
      const data = await response.json();
      if (!isUnmount) {
        filterReplies(data);
      }
    };

    fetchReplies();

    return () => {
      isUnmount = true;
    };
  }, [props]);

  const replyCount = () => {
    if (replies.length === 0) {
      return null;
    }
    if (replies.length === 1) {
      return (
        <>
          <i className='fas fa-share'></i>
          <button
            onClick={() => setShowReplies(!showReplies)}
            className='show-replies'
          >
            1 Reply
          </button>
        </>
      );
    }
    if (replies.length > 1) {
      return (
        <>
          <i className='fas fa-share'></i>
          <button
            onClick={() => setShowReplies(!showReplies)}
            className='show-replies'
          >
            {`${replies.length} replies`}
          </button>
        </>
      );
    }
  };

  return (
    <div className='replies-container'>
      <div className='main-row'>{replyCount()}</div>
      {showReplies && replies ? (
        <Replies allUsers={props.allUsers} replies={replies} />
      ) : null}
    </div>
  );
}

export default ReplyToggle;
