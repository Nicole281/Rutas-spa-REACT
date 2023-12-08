import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Perfil from './components/Perfil';
import Nosotros from './components/Nosotros';
import Buscar from './components/Buscar';
import Donaciones from './components/Donaciones';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/donaciones" element={<Donaciones />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
