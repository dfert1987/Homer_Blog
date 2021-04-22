import React, {useState} from 'react';
import './CreatePost.css';
import ReactQuill from 'react-quill';

export default function AdminCreatePost() {
  const [body, setBody] = useState('');

  const handleBody = (e) => {
    console.log(e);
    setBody(e);
  };

  return (
    <div className='container'>
      <div className='main'>
        <h1 className='add-title'>Add A Post</h1>
        <ReactQuill
          placeholder="Start Bloggin'..."
          modules={AdminCreatePost.modules}
          formats={AdminCreatePost.formats}
          onChange={handleBody}
          value={body}
        />
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
  'code-block',
];
