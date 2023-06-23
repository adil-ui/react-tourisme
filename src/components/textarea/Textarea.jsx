import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import './Textarea.css';

const Textarea = () => {
  const [html, setHTML] = useState('');

  const handleEditorChange = (value) => {
    setHTML(value);
  };

  return (
    <div className='bg-white'>
      <ReactQuill value={html} onChange={handleEditorChange} className='quill-editor'/>

    </div>
  );
};

export default Textarea;
