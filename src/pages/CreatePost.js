import React, { useState } from 'react';
import '../App.css';
import Axios from 'axios';

export default function CreatePost() {
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const submitPost = () => {
    Axios.post('http://localhost:3001/api/create', {
      userName: userName,
      title: title,
      text: text,
    });
  };

  return (
    <div className='CreatePost'>
      <div className='uploadPost'>
        <label>UserName</label>
        <input
          type='text'
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Title</label>
        <input
          type='text'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Post Text</label>
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button onClick={submitPost}>Submit Post</button>
      </div>
    </div>
  );
}
