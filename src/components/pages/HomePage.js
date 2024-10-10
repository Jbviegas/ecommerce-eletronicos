import React from 'react';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import ExclusiveSection from '../ExclusiveSection/ExclusiveSection';
import TestemunialList from '../TestemunialsList/TestemunialList';

import "./style.css";

export default function HomePage({ products, addProductToCart }) {
    return (
        <>
            <Header />
            <section>
                <div className='page-inner-content'>
                    <div className='section-title'>
                        <h3>Produtos selecionados</h3>
                        <div className='underline'>
                        </div>
                    </div>
                    <div>
                        <ProductList products={products} addProductToCart={addProductToCart} />
                    </div>
                </div>
            </section>
            <section>
                <ExclusiveSection />
                <TestemunialList />
            </section>
        </>
    )
}
/* O ProductList mapeia através do parametro products da sua função tudo o que está na tabela products que foi setada no useState e coloca
 no formato da props Product que ele importou. */
