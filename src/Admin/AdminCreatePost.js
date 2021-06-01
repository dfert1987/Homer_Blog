import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import {useHistory} from 'react-router-dom';
import './CreatePost.css';

export default function AdminCreatePost() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('');
  const [mainImage, setMainImage] = useState('');
  const history = useHistory();

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
    author: '',
  };

  const onSubmit = (event) => {
    const newBlog = {
      blog: post,
    };
    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    });
    setTitle('');
    setSubtitle('');
    setMainImage('');
    setCategory('');
    setContent('');
    history.push('/');
    event.preventDefault();
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
          </div>
          <ReactQuill
            placeholder="Start Bloggin'..."
            modules={AdminCreatePost.modules}
            formats={AdminCreatePost.formats}
            onChange={setContent}
            value={content}
            className='quill'
          />
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
];
