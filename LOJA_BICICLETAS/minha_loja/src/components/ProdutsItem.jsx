
import React from 'react';
import { Link } from 'react-router-dom';


function ProdutsItem({ produts ,} ) {

 
  return (

    <div className='produts-item' >
     
   
     
   


      <h3>{produts.name}</h3>
      <p>Preço: R${produts.price.toFixed(2)}</p>
     


<Link to={`/produts/${produts.id}`}>   <img src={produts.image} alt={produts.name} /> <button id='button-btn'>Ver detalhes</button></Link>

    
    </div>
  );
}


export default ProdutsItem;
