
import React, { useState, useEffect } from 'react';
import ProdutsItem from '../components/ProdutsItem';
import './ProdutsList.css'

function ProdutsList() {
  const [produts, setproduts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/produts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setproduts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro ao carregar produtos.</p>;
  }

  return (
    <div  className='produts-list'>

      <h2>Nossos Produtos</h2>
      <div id='produts-container'>
        {produts.map(produts => (
          <ProdutsItem key={produts.id} produts={produts} />
        ))}
      </div>
    </div>
  );
}

export default ProdutsList;