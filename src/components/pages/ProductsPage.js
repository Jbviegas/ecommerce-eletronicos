import React from 'react'
import ProductList from '../ProductList/ProductList'

export default function ProductsPage({ products, addProductToCart }) {
    return (
        <section>
            <div className='page-inner-content'>
                <div className='section-title'>
                    <h3>Nossos Produtos</h3>
                    <div className='underline'>
                    </div>
                </div>
                <div>
                    <ProductList products={products} addProductToCart={addProductToCart} />
                </div>
            </div>
        </section>
    )
}
/* O ProductList mapeia através do parametro products da sua função tudo o que está na tabela products que foi setada no useState e coloca
 no formato da props Product que ele importou. */