// src/FormComponent.js

import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/submit', formData)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Submit Your Details</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ marginLeft: '10px', padding: '5px' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ marginLeft: '10px', padding: '5px' }}
              required
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>
      {response && (
        <div style={{ marginTop: '20px', color: 'green' }}>
          <p>{response.message}</p>
          <p>Name: {response.data.name}</p>
          <p>Email: {response.data.email}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
