import React, {useState, useEffect} from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
      fetchBlogs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const fetchBlogs = async () => {
    console.log('ok');
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
              src={blogs.length > 0 ? blogs[0].mainImage : ''}
              text={blogs.length > 0 ? blogs[0].text : ''}
              label={blogs.length > 0 ? blogs[0].category : ''}
              path={`/${blogs.length > 0 ? blogs[0].category : ''}`}
            />
            <CardItem
              src='https://i.imgur.com/EmVgHk2.jpg'
              text='The curious case of Mitch Trubisky apologists.'
              label='Bears'
              path='/bears'
            />
          </ul>
          <ul className='cards-items'>
            <CardItem
              src='https://i.imgur.com/ZZ5dLJU.jpg'
              text='How Did We Get Here? The Suddenly Bleak State of the Cubs.'
              label='Cubs'
              path='/cubs'
            />
            <CardItem
              src='https://i.imgur.com/MwgKmUM.jpg'
              text='Pace and Nagy: So, how much can we blame these guys?'
              label='Bears'
              path='/bears'
            />
            <CardItem
              src='https://i.imgur.com/Y2Eorvu.jpg'
              text='Thad Young: An Ode to the NBA Journeyman.'
              label='Bulls'
              path='/bulls'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
