import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailsProduts({ onAdicionarAoCarrinho }) {
  const { id } = useParams();
  const [produts, setProduts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/produts/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProduts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Carregando detalhes do produto...</p>;
  }

  if (error) {
    return <p>Erro ao carregar detalhes do produto.</p>;
  }

  if (!produts) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div className='details-produts' >
      <h2>{produts.name}</h2>
      <img src={produts.image} alt={produts.name} />
      <p>Preço: R${produts.price.toFixed(2)}</p>
<button onClick={() => onAdicionarAoCarrinho(produts)}   >ADCIONAR AO CARRINHO</button> 
  
      <p><Link to="/">Voltar para a loja</Link></p>
    </div>
  );
}

export default DetailsProduts;