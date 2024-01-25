import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toolbarOptions } from './utils/toolbar';

export default (props) => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: toolbarOptions
    // Include any other modules
  };

  return <ReactQuill
    theme="snow"
    value={value}
    onChange={setValue}
    modules={modules}
  />;
}