import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', email);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
        <h2>Free E-book Alert!</h2>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="your email"
          required
        />
      </label>
      <button type="submit">Download Now</button>
    </form>
  );
}

export default Form;
