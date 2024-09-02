import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import HomeCategory from './Pages/HomeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';      // Correct path
import woman_banner from './Components/Assets/banner_women.png';  // Correct path
import kid_banner from './Components/Assets/banner_kids.png';      // Correct path

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mens' element={<HomeCategory banner={men_banner} category='men' />} />
          <Route path='/women' element={<HomeCategory banner={woman_banner} category='women' />} />
          <Route path='/kids' element={<HomeCategory banner={kid_banner} category='kid' />} />
          <Route path="product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
