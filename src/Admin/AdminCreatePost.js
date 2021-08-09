import React, {useState, useEffect} from 'react';
import ReactQuill from 'react-quill';
import {useHistory} from 'react-router-dom';
import './CreatePost.css';

export default function AdminCreatePost() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:3000/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => setUser(result));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const post = {
      title: title,
      subtitle: subtitle,
      mainImage: mainImage,
      secondImage: '',
      thirdImage: '',
      body: content,
      thumbsUp: 0,
      thumbsDown: 0,
      category: category,
      author: user ? user.name : '',
    };
    const newBlog = {
      blog: post,
    };
    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          console.error(result.error);
        } else {
          setTitle('');
          setSubtitle('');
          setMainImage('');
          setCategory('');
          setContent('');
          history.push('/');
        }
      });
  };

  return (
    <div className='container'>
      <div className='main'>
        <h1 className='add-title'>Add A Post</h1>
        <form className='add-post-form' onSubmit={onSubmit}>
          <div className='above-blog-container'>
            <input
              className='input'
              type='text'
              placeholder='Choose a title:'
              value={title}
              name='title'
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className='input'
              type='text'
              placeholder='Choose a Subtitle...'
              value={subtitle}
              name='subtitle'
              onChange={(e) => setSubtitle(e.target.value)}
            />
            <input
              className='input'
              type='text'
              placeholder='Paste Preview Image Link..'
              value={mainImage}
              name='mainImage'
              onChange={(e) => setMainImage(e.target.value)}
            />
            <select
              className='category-input'
              placeholder='Some Category...'
              value={category}
              name='category'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={null}>Select a Category:</option>
              <option value='bulls'>Bulls</option>
              <option value='bears'>Bears</option>
              <option value='cubs'>Cubs</option>
              <option value='meatball'>The Meatball</option>
            </select>
            <ReactQuill
              placeholder="Start Bloggin'..."
              modules={AdminCreatePost.modules}
              formats={AdminCreatePost.formats}
              onChange={setContent}
              value={content}
              className='quill'
            />
          </div>
          <input className='submit-button' type='submit' />
        </form>
      </div>
    </div>
  );
}
AdminCreatePost.modules = {
  toolbar: [
    [{header: '1'}, {header: '2'}, {header: [3, 4, 5, 6]}, {font: []}],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{list: 'ordered'}, {list: 'bullet'}],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block'],
    [{align: ''}, {align: 'center'}, {align: 'right'}, {align: 'justify'}],
  ],
};

AdminCreatePost.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block',
  'align',
];
