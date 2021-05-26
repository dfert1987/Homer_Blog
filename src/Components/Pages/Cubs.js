import React, {useEffect, useState, useCallback} from 'react';
import CardItem from '../Card/CardItem';

import '../../App.css';

export default function Cubs() {
  const [cubsBlogs, setCubsBlogs] = useState([]);


  const fetchBlogs = useCallback(async () => {
    const response = await fetch('http://localhost:3000/blogs');
    const data = await response.json();
    filterBlogs(data);
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const filterBlogs = (blogs) => {
    const filteredBlogs = blogs.filter((blog) => blog.category === 'cubs');
    setCubsBlogs(filteredBlogs);
  };

  const cards = cubsBlogs.map((blog) => {
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
      <div className='cubs-banner'>
        <h1 className='cubs'>CUBS</h1>
      </div>
      <div className='blog-container'>
        <div className='top-blog'>{cards}</div>
        <div className='old-blogs'></div>
      </div>
    </div>
  );
}
