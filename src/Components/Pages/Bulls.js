import React, {useCallback, useEffect, useState} from 'react';
import CardItem from '../Card/CardItem';
import '../../App.css';

export default function Bulls() {
  const [bullsBlogs, setBullsBlogs] = useState([]);

  const fetchBlogs = useCallback(async () => {
    const response = await fetch('http://localhost:3000/blogs');
    const data = await response.json();
    filterBlogs(data);
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const filterBlogs = (blogs) => {
    const filteredBlogs = blogs.filter((blog) => blog.category === 'bulls');
    setBullsBlogs(filteredBlogs);
  };

  const cards = bullsBlogs.map((blog) => {
    return (
      <CardItem
        src={blog.mainImage}
        text={`${blog.title} - ${blog.subtitle}`}
        label={blog.category}
      />
    );
  });

  return (
    <div className='container'>
      <div className='bulls-banner'>
        <h1 className='bulls'>BULLS</h1>
      </div>
      <div className='blog-container'>
        <div className='top-blog'>{cards}</div>
        <div className='old-blogs'></div>
      </div>
    </div>
  );
}
