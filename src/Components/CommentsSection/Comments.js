import React, {useState, useEffect} from 'react';
import Comment from './Comment';
import './CommentsSection.css';

export default function Comments(props) {
  const [currentBlogComments, setCurrentBlogComments] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  console.log(props);
  console.log(currentBlogComments);

  useEffect(() => {
    let isUnmount = false;
    const filterComments = (data) => {
      console.log(props.comments.blog.id);
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

  return (
    <>
      {currentBlogComments ? (
        <div id={`${props.comments.blog.id}-comments`} className='all-comments'>
          {currentBlogFunction()}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
