import './App.css';
import Nav from './components/Nav';
import Register from './components/Register';
import Login from './components/LogIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/logout' element={<h1>Logout</h1>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
