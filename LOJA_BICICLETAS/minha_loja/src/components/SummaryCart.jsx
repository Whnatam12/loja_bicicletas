
import React from 'react';

function SummaryCart({ item, onRemoverDoCarrinho }) {
  return (
    <div className='summary-cart' >
      <img src={item.image} alt={item.name} />
      <div><p>{item.name}</p></div>
      <div><p>${(item.price * item.quantidade).toFixed(2)} (x{item.quantidade})</p></div>
      <button onClick={() => onRemoverDoCarrinho(item.id)} >Remover</button>
    </div>
  );
}

export default SummaryCart;