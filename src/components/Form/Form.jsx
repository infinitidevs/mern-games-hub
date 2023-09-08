import React, { useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { FormWrapper, InputsWrapper } from './styles';

const Form = () => {
  const { login } = useAuth();
  const [user, setUser] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === 'access@rtc' && e.target[1].value === 'granted') {
      login(user);
      window.location.reload();
    } else {
      alert('Enter a valid email and password!');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputsWrapper>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            onChange={handleInput}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            onChange={handleInput}
          />
        </label>
      </InputsWrapper>
      <button type="submit">Log in</button>
    </FormWrapper>
  );
};

export default Form;
