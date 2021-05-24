import React, {useState, useCallback} from 'react';
import './CreatePost.css';
import ReactQuill from 'react-quill';

export default function AdminCreatePost() {
  const defaultBlog = {
    title: '',
    subtitle: '',
    mainImage: '',
    secondImage: '',
    thirdImage: '',
    body: '',
    thumbsUp: 0,
    thumbsDown: 0,
    category: '',
    authoer: '',
  };
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [blog, setBlog] = useState(defaultBlog);

  const postData = {
    body: content,
    title: title,
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    setContent('');
  };

  return (
    <div className='container'>
      <div className='main'>
        <h1 className='add-title'>Add A Post</h1>
        <form method='post' id='identifier'>
          <label className='title-label'>Title:</label>
          <input
            className='title-input'
            type='text'
            placeholder='Some Title..'
            value={title}
            name='title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className='subtitle-label'>Subtitle:</label>
          <input
            className='subtitle-input'
            type='text'
            placeholder='Some Subtitle..'
            value={subtitle}
            name='subtitle'
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <ReactQuill
            placeholder="Start Bloggin'..."
            modules={AdminCreatePost.modules}
            formats={AdminCreatePost.formats}
            onChange={setContent}
            value={content}
          />
          <input type='submit' value='Add Post' onSubmit={onSubmit} />
        </form>
      </div>
    </div>
  );
}
