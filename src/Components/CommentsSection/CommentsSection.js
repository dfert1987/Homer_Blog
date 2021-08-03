import React, {useState, useEffect} from 'react';
import {Button} from '../Button/Button';
import Comments from './Comments';
import './CommentsSection.css';

export default function CommentSection(props) {
  const [user, setUser] = useState();
  const [form, setForm] = useState(false);
  const [userComment, setUserComment] = useState('');

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

  return (
    <>
      {user ? (
        <div className='comment-container'>
          <div className='comment-title-container'>
            <h3 className='comment-title'>COMMENTS</h3>
            <p className='comment-count'>10 comments</p>
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
