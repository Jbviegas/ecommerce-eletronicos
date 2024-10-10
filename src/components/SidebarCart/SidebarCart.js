import { faMoneyBill, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SidebarProduct from '../SidebarProduct/SidebarProduct';
import React from 'react'

import { Link } from 'react-router-dom';

import "./style.css";



export default function SidebarCart({ selectedProduct, cartTotal, removeProductFromCart, addToCartTotal }) {

    function esconderSidebar() {
        let sidebar = document.querySelector(".sidebar-cart")

        sidebar.style.display = "none"
    }

    return (
        <aside className="sidebar-cart">
            <div className='top'>
                <h3>Seu Carrinho</h3>

                <button>
                    <FontAwesomeIcon icon={faXmark} onClick={esconderSidebar} />
                </button>
            </div>

            <div>
                {selectedProduct.map((product) => (// Mapeia todos os produtos que foram selecionados  em selectProducts
                    <SidebarProduct key={product.id} {...product}//Coloca todos esses produtos no formato da props SidebarProducts que foi importada
                        removeProductFromCart={removeProductFromCart}//Remove do carrinho um produto cujo id é diferente dos ids criado neesa função
                        addToCartTotal={addToCartTotal}//Adiciona um valor total, somando a quantidade de produto + seu valor
                    />
                ))}
            </div>

            {cartTotal === 0 ? (<p className='italico'> <i>Seu carrinho está vazio</i> </p>) : (
                <>

                    <div>
                        <b>Total:</b>{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(cartTotal)}
                        {/* Mostra o valor total dos produtos que estão dentro do carrinho*/}
                    </div>

                    <Link to="/cart/chekout" className='btn-icon'>
                        <span>Pagar agora</span>
                        <FontAwesomeIcon icon={faMoneyBill} />
                    </Link>
                </>
            )}
        </aside>


    )
}
