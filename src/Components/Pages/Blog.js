import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const defaultBlog = {
  id: 0,
  author: '',
  body: '',
  mainImage: '',
  subtitle: '',
  tagOne: '',
  tagTwo: '',
  tagThree: '',
  thumbsDown: 0,
  thumbsUp: 0,
  title: '',
};

function Blog() {
  const {blogId} = useParams();
  const [blog, setBlog] = useState(defaultBlog);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    fetch(`http://localhost:3000/blogs/${blogId}`)
      .then((response) => response.json())
      .then((response) => setBlog(response));
  };

  const getBodyHTML = (str) => {
    if (str === '') {
      return null;
    } else {
      var image = document.getElementById('image');
      image.insertAdjacentHTML('afterend', str);
    }
  };

  return (
    <div>
      <h1 className='blogTitle'>{blog.title}</h1>
      <h3 className='blogSubtitle'>{blog.subtitle}</h3>
      <img id="image" className='mainImage' alt='main-image' src={blog.mainImage} />
      {getBodyHTML(blog.body)}
    </div>
  );
}

export default Blog;
