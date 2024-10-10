import { faCartShopping, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import "./style.css";

export default function Product({ image, name, price, id, addProductToCart }) {
    return (
        <div className='product'>
            <img src={image} alt={name} />
            <p className="name">{name}</p>
            <p className="price">{price} <span>R$</span> </p>

            <div className='buttons'>
                <button className='btn-icon'>
                    <Link to="products/123/checkout">
                        <span>Comprar Agora</span>
                        <FontAwesomeIcon icon={faMoneyBill} />
                    </Link>
                </button>
                <button className='btn-icon add-to-cart-btn' onClick={() => addProductToCart(id)}>
                    {/* Adicionar um produto ao carrinho mostrar a quantidade e preço e contar quantos produtos tem e mostrar na bolinha vermelha */}
                    <span>Adicionar</span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
        </div>
    )
}
