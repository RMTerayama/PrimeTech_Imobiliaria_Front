import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main'; // Importando o componente Main
import Login from './pages/Login'; // Importando o componente Login

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Main />} />
        
        {/* Rota para a página de login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
