import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>BRMachine</h1>
      <nav>
        <ul>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#atuacao">Atuação</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
