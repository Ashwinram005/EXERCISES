import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,[name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        </label>
      </div>
      <div>
        <label>
        Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange}/>
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange}/>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;