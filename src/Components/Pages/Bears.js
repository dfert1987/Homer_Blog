import React, {useEffect, useState} from 'react';
import CardItem from '../Card/CardItem';
import '../../App.css';

export default function Bears() {
  const [bearsBlogs, setBearsBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await fetch('http://localhost:3000/blogs');
    const data = await response.json();
    filterBlogs(data);
  };

  const filterBlogs = (blogs) => {
    const filteredBlogs = blogs.filter((blog) => blog.category === 'bears');
    setBearsBlogs(filteredBlogs);
  };

  const cards = bearsBlogs.map((blog) => {
    return (
      <CardItem
        src={blog.mainImage}
        text={`${blog.title} - ${blog.subtitle}`}
        label={blog.category}
      />
    );
  });

  console.log(bearsBlogs);
  return (
    <div className='container'>
      <div className='bears-banner'>
        <h1 className='bears'>BEARS</h1>
      </div>
      <div className='blog-container'>
        <div className='top-blog'>{cards}</div>
        <div className='old-blogs'></div>
      </div>
    </div>
  );
}
