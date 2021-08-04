import React, {useState, useEffect} from 'react';
import {Button} from '../Button/Button';
import Comments from './Comments';
import './CommentsSection.css';

export default function CommentSection(props) {
  const [user, setUser] = useState();
  const [form, setForm] = useState(false);
  const [userComment, setUserComment] = useState('');
  const [currentBlogComments, setCurrentBlogComments] = useState([]);
  const [downVoteColor, setDownVoteColor] = useState('black_downvote');
  const [upVoteColor, setUpVoteColor] = useState('black_upvote');
  const [upvote, setUpVote] = useState(2);
  const [downvote, setDownVote] = useState(1);

  useEffect(() => {
    if (localStorage.token === 'null') {
      setUser();
    } else {
      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => setUser(result));
    }
  }, []);

  const submitComment = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/remarks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        remark: {
          comment: userComment,
          upVote: 0,
          downVote: 0,
          blogID: props.blog.id,
          userID: user.id,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          console.error(result.error);
        } else {
          console.log(result);
          setForm(false);
        }
      });
  };

  useEffect(() => {
    let isUnmount = false;
    const filterComments = (data) => {
      const filteredComments = data.filter(
        (comment) => comment.blogID === props.blog.id
      );
      setCurrentBlogComments(filteredComments);
    };

    const fetchComments = async () => {
      const response = await fetch('http://localhost:3000/remarks');
      const data = await response.json();
      if (!isUnmount) {
        filterComments(data);
      }
    };

    setTimeout(() => {
      fetchComments();
    });

    return () => {
      isUnmount = true;
    };
  }, [props.blog.id]);

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
    <>
      {user ? (
        <div className='comment-container'>
          <div className='comment-title-container'>
            <div className='title-and-count'>
              <h3 className='comment-title'>COMMENTS</h3>
              <p className='comment-count'>10 comments</p>
            </div>
            <div className='up-down-container'>
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
          <hr className='light-divider' />
          <form className='comment-form' onSubmit={submitComment}>
            {form === false ? (
              <input
                className='comment-inactive'
                placeholder='Leave your comment...'
                type='text'
                onFocus={() => setForm(true)}
              ></input>
            ) : (
              <div className='active-form-container'>
                <textarea
                  className='comment-active'
                  name='userComment'
                  placeholder='Leave your comment...'
                  rows='8'
                  columns='3'
                  onChange={(e) => setUserComment(e.target.value)}
                ></textarea>
                <div className='comment-button-container'>
                  <div className='submit-comment-button-container'>
                    <Button
                      className='submit-comment-button'
                      buttonStyle='btn--outline3'
                      type='submit'
                    >
                      SUBMIT
                    </Button>
                  </div>
                  <div className='exit-comment-button-container'>
                    <Button
                      className='exit-comment-button'
                      buttonStyle='btn--outline3'
                      type='button'
                      onClick={() => setForm(false)}
                    >
                      CLOSE
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </form>
          <Comments comments={props} />
        </div>
      ) : (
        <div className='comment-container'>
          <Comments comments={props} />
        </div>
      )}
    </>
  );
}
