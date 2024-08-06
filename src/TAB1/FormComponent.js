import React, { useState } from 'react';

const FormComponent = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text, image });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Text:</label>
        <input type="text" value={text} onChange={handleTextChange} required />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} required />
      </div>
      <button type="submit">Generate PDF</button>
    </form>
  );
};

export default FormComponent;
