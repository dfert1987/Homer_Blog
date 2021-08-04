import React, {useState, useEffect} from 'react';
import Comment from './Comment';
import './CommentsSection.css';

export default function Comments(props) {
  const [allUsers, setAllUsers] = useState([]);
  const [currentBlogComments, setCurrentBlogComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((response) => response.json())
      .then((result) => setAllUsers(result));
  }, []);

  const currentBlogFunction = () => {
    const blog = currentBlogComments.map((remark) => {
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

  useEffect(() => {
    let isUnmount = false;
    const filterComments = (data) => {
      const filteredComments = data.filter(
        (comment) => comment.blogID === props.comments.blog.id
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
  }, [props.comments.blog.id]);



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
