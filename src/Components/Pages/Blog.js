import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './Blog.css';

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
      var image = document.getElementById('bodyContainer');
      image.insertAdjacentHTML('afterbegin', str);
    }
  };

  const capitalizeSub = (sub) => {
    if (sub) {
      const splitSub = sub.split(' ');

      for (let i = 0; i < splitSub.length; i++) {
        splitSub[i] = splitSub[i][0].toUpperCase() + splitSub[i].substr(1);
      }
      return splitSub.join(' ');
    }
    return null;
  };

  return (
    <div className='blogContainer'>
      <h1 className='blogTitle'>{blog.title}</h1>
      <h3 className='blogSubtitle'>{capitalizeSub(blog.subtitle)}</h3>
      <img className='mainImage' alt='main-image' src={blog.mainImage} />
      <hr className='divider' />
      <div id='bodyContainer' className='bodyContainer'>
        {getBodyHTML(blog.body)}
      </div>
      <hr className='dividerBottom' />
    </div>
  );
}

export default Blog;
