import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header class="header">
        <div class="logo">
          <img src='/images/pokebola.png' alt='Logo Pokédex' width='60'></img>
          Pokédex
        </div>
        <div class="menu">
          <nav>
            <Link to={"/"}>Home page</Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Home;