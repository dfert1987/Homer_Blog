import React, {useState, useCallback} from 'react';
import ReactQuill from 'react-quill';

import './CreatePost.css';

export default function AdminCreatePost() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('');

  const postData = {
    body: content,
    title: title,
    category: category,
  };

  console.log(content);

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
        <form method='post' id='identifier' className='add-post-form'>
          <div className='above-blog-container'>
            <input
              className='input'
              type='text'
              placeholder='Some Title..'
              value={title}
              name='title'
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className='input'
              type='text'
              placeholder='Some Subtitle..'
              value={subtitle}
              name='subtitle'
              onChange={(e) => setSubtitle(e.target.value)}
            />
            <select
              className='category-input'
              placeholder='Some Category..'
              value={category}
              name='category'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={null}>Select a Category:</option>
              <option value='bulls'>Bulls</option>
              <option value='bears'>Bears</option>
              <option value='cubs'>Cubs</option>
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
          <input
            className='submit-button'
            type='submit'
            value='Add Post'
            onSubmit={onSubmit}
          />
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
  'code-block'
];
