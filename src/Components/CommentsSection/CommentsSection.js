import React, {useState} from 'react';
import {Button} from '../Button/Button';
import Comments from './Comments';
import './CommentsSection.css';

export default function CommentSection(props) {
  const [form, setForm] = useState(false);

  return (
    <div className='comment-container'>
      <div className='comment-title-container'>
        <h3 className='comment-title'>COMMENTS</h3>
        <p className='comment-count'>10 comments</p>
      </div>
      <hr className='light-divider' />
      <form className='comment-form'>
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
              name='comment'
              placeholder='Leave your comment...'
              rows='8'
              columns='3'
              onBlur={() => setForm(false)}
            ></textarea>
            <Button
              className='submit-comment-button'
              buttonStyle='btn--outline3'
              type='submit'
            >
              SUBMIT
            </Button>
          </div>
        )}
      </form>
     <Comments comments={props}/>
    </div>
  );
}
