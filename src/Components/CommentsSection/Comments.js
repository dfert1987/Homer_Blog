import React, {useState, useEffect} from 'react';
import Comment from './Comment';
import './CommentsSection.css';

export default function Comments(props) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((response) => response.json())
      .then((result) => setAllUsers(result));
  }, []);

  const currentBlogFunction = () => {
    const blog = props.comments.map((remark) => {
      return (
        <Comment
          id={`comment-${remark.id}`}
          comment={remark}
          allUsers={allUsers}
        />
      );
    });
    return blog;
  };

  return (
    <>
      {props.comments ? (
        <div id={`${props.comments.id}-comments`} className='all-comments'>
          {currentBlogFunction()}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
