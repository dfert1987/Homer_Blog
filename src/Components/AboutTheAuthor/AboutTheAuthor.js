import React, {useEffect, useState} from 'react';
import './AboutTheAuthor.css';

export default function AboutTheAuthor(props) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => setAllUsers(result));
  };

  const findAvatar = () => {
    const theAuthor = allUsers.find((user) => user.name === props.author);
    return theAuthor ? theAuthor.avatar : '';
  };

  const findAbout = () => {
    const theAuthor = allUsers.find((user) => user.name === props.author);
    return theAuthor ? theAuthor.about : '';
  };

  const findTwitter = () => {
    const theAuthor = allUsers.find((user) => user.name === props.author);
    return theAuthor ? theAuthor.twitter : '';
  };

  return (
    <div className='author-container'>
      <h3 className='author-title'>BY {props.author}</h3>
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
