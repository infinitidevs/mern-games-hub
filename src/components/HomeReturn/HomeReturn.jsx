import React from 'react';
import { Link } from 'react-router-dom';

const HomeReturn = () => {
  return (
    <Link to="/">
      <img
        src="https://cdn.jsdelivr.net/gh/infinitidevs/mern-games-hub@main/src/assets/home.svg"
        alt="Home Icon"
        type="xml/svg"
      />
    </Link>
  );
};

export default HomeReturn;
