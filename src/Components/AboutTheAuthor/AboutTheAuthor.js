import React, {useEffect, useState} from 'react';
import profile from './meprofile.jpeg';
import './AboutTheAuthor.css';

export default function AboutTheAuthor(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    setUsers(data);
  };

  const findAvatar = () => {
    const theAuthor = users.find((user) => user.username === props.author);
    return theAuthor ? theAuthor.avatar : '';
  };

  const findAbout = () => {
    const theAuthor = users.find((user) => user.username === props.author);
    return theAuthor ? theAuthor.about : '';
  };

  const findTwitter = () => {
    const theAuthor = users.find((user) => user.username === props.author);
    return theAuthor ? theAuthor.twitter : '';
  };

  console.log(users);

  return (
    <div className='author-container'>
      <h3 className='author-title'>AUTHOR: {props.author}</h3>
      <div className='bio-container'>
        <img className='bio-image' alt='author' src={findAvatar()} />
        <div className='about-container'>
          <p className='bio-text'>{findAbout()}</p>
          <p className='follow'>Follow me at {findTwitter()}</p>
        </div>
      </div>
    </div>
  );
}
