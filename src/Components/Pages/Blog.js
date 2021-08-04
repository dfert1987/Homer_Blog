import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import AboutTheAuthor from '../../Components/AboutTheAuthor/AboutTheAuthor';
import CommentsSection from '../../Components/CommentsSection/CommentsSection';
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
  const [contactModal, setContactModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/blogs/${blogId}`)
      .then((response) => response.json())
      .then((response) => setBlog(response));
  }, [blogId]);

  const getBodyHTML = (str) => {
    if (str === '') {
      return null;
    } else {
      var htmlContent = document.getElementById('bodyContainer');
      htmlContent.insertAdjacentHTML('afterbegin', str);
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
      <div className='blogTitleContainer'>
        <h1 className='blogTitle'>{blog.title}</h1>
        <h3 className='blogSubtitle'>{capitalizeSub(blog.subtitle)}</h3>
      </div>
      <img className='mainImage' alt='side-panel' src={blog.mainImage} />
      <hr className='divider' />
      <div id='bodyContainer' className='bodyContainer'>
        {getBodyHTML(blog.body)}
      </div>
      <div className='post-blog'>
        <hr className='dividerBottom' /> <AboutTheAuthor author={blog.author} />
        <hr className='dividerBottom' /> <CommentsSection blog={blog} />
      </div>
      <Footer contactModal={contactModal} setContactModal={setContactModal} />
    </div>
  );
}

export default Blog;
