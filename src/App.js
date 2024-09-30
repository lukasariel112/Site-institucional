import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Aqui você pode adicionar o conteúdo principal do site */}
        <section id="produtos">
          <h2>Nossos Produtos</h2>
          <p>Detalhes dos produtos oferecidos pela BRMachine.</p>
        </section>
        <section id="atuacao">
          <h2>Nossa Atuação</h2>
          <p>Áreas de atuação da empresa.</p>
        </section>
        <section id="sobre">
          <h2>Sobre Nós</h2>
          <p>Informações sobre a empresa BRMachine.</p>
        </section>
        <section id="contato">
          <h2>Contato</h2>
          <p>Formas de entrar em contato conosco.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
