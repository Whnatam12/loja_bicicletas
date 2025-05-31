
import React from 'react';
import SummaryCart from '../components/SummaryCart';
import { Link } from 'react-router-dom';

function Carrinho({ cart, onRemoverDoCarrinho }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantidade, 0).toFixed(2);

  if (cart.length === 0) {
    return <p>Seu carrinho está vazio. <Link to="/">Voltar para a loja</Link></p>;
  }

  return (
    <div className='cart'>
      <h2>Seu Carrinho</h2>
      {cart.map(item => (
        <SummaryCart key={item.id} item={item} onRemoverDoCarrinho={onRemoverDoCarrinho} />
      ))}
     
      <p>Total: R$ {total}</p>
      <button id='button'>Finalizar Compra</button>
      <p><Link to="/">Continuar Comprando</Link></p>
    </div>
  );
}

export default Carrinho;