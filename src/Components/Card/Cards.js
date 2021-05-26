import React, {useState, useEffect} from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await fetch('http://localhost:3000/blogs');
    const data = await response.json();
    setBlogs(data);
  };

  return (
    <div className='cards'>
      <div className='header-container'>
        <img
          className='logo'
          alt='logo'
          src='https://Zi.imgur.com/MaLqLee.png'
        />
        <h1 className='cards-title'>Hot takes and hometown bias</h1>
      </div>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItem
              src={blogs.length > 0 ? blogs[blogs.length - 1].mainImage : ''}
              text={
                blogs.length > 0
                  ? `${blogs[blogs.length - 1].title} - ${
                      blogs[blogs.length - 1].subtitle
                    }`
                  : ''
              }
              label={blogs.length > 0 ? blogs[blogs.length - 1].category : ''}
              path={`/${
                blogs.length > 0 ? blogs[blogs.length - 1].category : ''
              }`}
            />
            <CardItem
              src={blogs.length > 0 ? blogs[blogs.length - 2].mainImage : ''}
              text={
                blogs.length > 0
                  ? `${blogs[blogs.length - 2].title} - ${
                      blogs[blogs.length - 2].subtitle
                    }`
                  : ''
              }
              label={blogs.length > 0 ? blogs[blogs.length - 2].category : ''}
              path={`/${
                blogs.length > 0 ? blogs[blogs.length - 2].category : ''
              }`}
            />
          </ul>
          <ul className='cards-items'>
            <CardItem
              src={blogs.length > 0 ? blogs[blogs.length - 3].mainImage : ''}
              text={
                blogs.length > 0
                  ? `${blogs[blogs.length - 3].title} - ${
                      blogs[blogs.length - 3].subtitle
                    }`
                  : ''
              }
              label={blogs.length > 0 ? blogs[blogs.length - 3].category : ''}
              path={`/${
                blogs.length > 0 ? blogs[blogs.length - 3].category : ''
              }`}
            />
            <CardItem
              src={blogs.length > 0 ? blogs[blogs.length - 4].mainImage : ''}
              text={
                blogs.length > 0
                  ? `${blogs[blogs.length - 4].title} - ${
                      blogs[blogs.length - 4].subtitle
                    }`
                  : ''
              }
              label={blogs.length > 0 ? blogs[blogs.length - 4].category : ''}
              path={`/${
                blogs.length > 0 ? blogs[blogs.length - 4].category : ''
              }`}
            />
            <CardItem
              src={blogs.length > 0 ? blogs[blogs.length - 5].mainImage : ''}
              text={
                blogs.length > 0
                  ? `${blogs[blogs.length - 5].title} - ${
                      blogs[blogs.length - 5].subtitle
                    }`
                  : ''
              }
              label={blogs.length > 0 ? blogs[blogs.length - 5].category : ''}
              path={`/${
                blogs.length > 0 ? blogs[blogs.length - 5].category : ''
              }`}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
