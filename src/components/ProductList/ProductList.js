import React from 'react'
import Product from '../Product/Product';

import "./style.css";

export default function ProductList({ products, addProductToCart }) {
    return (

        <div className='product-list'>
            {products.map(product => (<Product key={product.id} {...product} addProductToCart={addProductToCart} />
            ))}  </div>/* ProductList será importado pelo HomePage e ProductPage e vai criar um novo  array com tudo que vem da tabela "products" 
            no data base /db.json através do "fetch" localizado no App, e vai colocar no formato da props Product que foi importada lá em cima. */
    )
}
/* O ProductList mapeia através do parametro products da sua função tudo o que está na tabela products que foi setada no useState e coloca
 no formato da props Product que ele importou. */