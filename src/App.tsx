import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Main from './pages/Main';
import AdicionarImovel from './pages/AdicionarImovel';
// import Relatorio from './pages/Relatorio';
// import Contratos from './pages/Contratos';
// import Financeiro from './pages/Financeiro';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Página de Login sem Sidebar */}
        <Route path="/login" element={<Login />} />

        {/* Aplicando o Layout para todas as outras páginas */}
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/adicionar-imovel" element={<AdicionarImovel />} />
          {/* 
          <Route path="/relatorio" element={<Relatorio />} />
          <Route path="/contratos" element={<Contratos />} />
          <Route path="/financeiro" element={<Financeiro />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
