import React, {useEffect, useState} from 'react';
import CardItem from '../Card/CardItem';
import Footer from "../../Components/Footer/Footer";
import './TeamPages.css';

export default function Cubs() {
  const [cubsBlogs, setCubsBlogs] = useState([]);
  const [firstBlogs, setFirstBlogs] = useState([]);
  const [contactModal, setContactModal] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('http://localhost:3000/blogs');
      const data = await response.json();
      filterBlogs(data);
    };
    fetchBlogs();
    const filterBlogs = (blogs) => {
      const allFilteredBlogs = blogs.filter(
        (blog) => blog.category === 'cubs'
      );
      setFeaturedBlogs(allFilteredBlogs.reverse());
      setRemainingBlogs(allFilteredBlogs);
    };
  }, []);

  const setRemainingBlogs = (blogs) => {
    const minusTwo = blogs.filter((data, idx) => idx > 1);
    setCubsBlogs(minusTwo);
  };

  const setFeaturedBlogs = (blogs) => {
    const firstTwo = blogs.filter((data, idx) => idx < 2);
    setFirstBlogs(firstTwo);
  };

  const cards = cubsBlogs.map((blog) => {
    return (
      <CardItem
        src={blog.mainImage}
        text={`${blog.title}`}
        label={blog.category}
        className='bottomCards'
        path={`/blog/${blog.id}`}

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
        path={`blog/${blog.id}`}

      />
    );
  });

  return (
    <div className='container'>
      <div className='cubs-banner'>
        <h1 className='cubs-title'>CUBS</h1>
      </div>
      <div className='blog-container'>
        <h3 className='featured'>Featured Blogs</h3>
        <div className='top-blog'>{mainRow}</div>
        <h3 className='past-blogs'>Past Blogs</h3>
        <div className='old-blogs'>{cards}</div>
      </div>
      <Footer contactModal={contactModal} setContactModal={setContactModal} />
    </div>
  );
}
