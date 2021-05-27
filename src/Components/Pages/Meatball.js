import React, {useEffect, useState} from 'react';
import CardItem from '../Card/CardItem';
import './TeamPages.css';

export default function Meatball() {
  const [meatballBlogs, setMeatballBlogs] = useState([]);
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
        (blog) => blog.category === 'meatball'
      );
      setFeaturedBlogs(allFilteredBlogs.reverse());
      setRemainingBlogs(allFilteredBlogs);
    };
  }, []);

  const setRemainingBlogs = (blogs) => {
    const minusTwo = blogs.filter((data, idx) => idx > 1);
    setMeatballBlogs(minusTwo);
  };

  const setFeaturedBlogs = (blogs) => {
    const firstTwo = blogs.filter((data, idx) => idx < 2);
    setFirstBlogs(firstTwo);
  };

  const cards = meatballBlogs.map((blog) => {
    return (
      <CardItem
        src={blog.mainImage}
        text={`${blog.title}`}
        label={blog.category}
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
    <div container>
      <div className='meatball-banner' />
      <div className='blog-container'>
        <div className='top-blog'>{mainRow}</div>
        <div className='old-blogs'>{cards}</div>
      </div>
    </div>
  );
}
