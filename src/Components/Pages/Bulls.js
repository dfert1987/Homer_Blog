import React, {useEffect, useState} from 'react';
import CardItem from '../Card/CardItem';
import './TeamPages.css';

export default function Bulls() {
  const [bullsBlogs, setBullsBlogs] = useState([]);
  const [firstBlogs, setFirstBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('http://localhost:3000/blogs');
      const data = await response.json();
      filterBlogs(data);
    };
    fetchBlogs();
    const filterBlogs = (blogs) => {
      const allFilteredBlogs = blogs.filter(
        (blog) => blog.category === 'bulls'
      );
      setFeaturedBlogs(allFilteredBlogs.reverse());
      setRemainingBlogs(allFilteredBlogs);
    };
  }, []);

  const setRemainingBlogs = (blogs) => {
    const minusTwo = blogs.filter((data, idx) => idx > 1);
    setBullsBlogs(minusTwo);
  };

  const setFeaturedBlogs = (blogs) => {
    const firstTwo = blogs.filter((data, idx) => idx < 2);
    setFirstBlogs(firstTwo);
  };

  const cards = bullsBlogs.map((blog) => {
    return (
      <CardItem
        src={blog.mainImage}
        text={`${blog.title}`}
        label={blog.category}
        className='bottomCards'
      />
    );
  });

  const mainRow = firstBlogs.map((blog) => {
    return (
      <CardItem
        src={blog.mainImage}
        text={`${blog.title} - ${blog.subtitle}`}
        label={blog.category}
        className='topCards'
      />
    );
  });

  return (
    <div className='container'>
      <div className='bulls-banner'>
        <h1 className='bulls-title'>BULLS</h1>
      </div>
      {/* <div className='blog-container'>
        <div className='top-blog'>{mainRow}</div>
        <div className='old-blogs'>{cards}</div>
      </div> */}
    </div>
  );
}
