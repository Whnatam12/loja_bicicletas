
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProdutsList from './Routes/ProdutsList';
import DetailsProduts from './components/DetailsProduts';
import Cart from './Routes/Cart'
import './App.css'
import { ImCart } from "react-icons/im";
import { FaStore } from "react-icons/fa";


function App() {
  const [cart, setCart] = useState([]);

  const adicionarAoCarrinho = (produts) => {
    const itemNoCarrinho = cart.find(item => item.id === produts.id);
    if (itemNoCarrinho) {
      setCart(cart.map(item =>
        item.id === produts.id ? { ...item, quantidade: item.quantidade + 1 } : item
      ));
    } else {
      setCart([...cart, { ...produts, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (produtsId) => {
    setCart(cart.filter(item => item.id !== produtsId));
  };

  return (
    <Router>

   
      <div className='app'>
     
       <div id='navbar'>
       <nav >


        <ul>

<li>
<Link to="/" ><button className='btn-home'><FaStore className='icon' /> Loja</button></Link>
</li>
<li>
<Link to="/cart"><button className='btn-home'> <ImCart  className='icon'/> Carrinho({cart.reduce((acc, item) => acc + item.quantidade, 0)})</button></Link>
</li>

        </ul>

       
          
        </nav>
       
       </div>

         <Routes>
          <Route path="/" element={<ProdutsList />} />
          <Route path="/produts/:id" element={<DetailsProduts onAdicionarAoCarrinho={adicionarAoCarrinho} />} />
          <Route path="/cart" element={<Cart cart={cart} onRemoverDoCarrinho={removerDoCarrinho} />} />
        </Routes>
      </div>
    </Router> 

  );
}

export default App;
