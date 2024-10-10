import React, { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./style.css";



export default function SidebarProduct({ image, name, price, id, removeProductFromCart, addToCartTotal }) {

    const [quantity, setQuantity] = useState(1);// Quantidade começa em 1
    const [priceSum, setPriceSum] = useState(price);// Valor inicial do produto é seu preço inicial

    function almentarValor() {// Função que aumenta o valor do input
        setQuantity(quantity + 1);// Aumenta de 1 em 1 a quantidade
        setPriceSum(priceSum + price);// Soma o preço atual do produto com seu preço inicial
        addToCartTotal(1 * price);// Adiciona ao valor total do carrinho o preço inicial
    }

    function diminuirValor() {// Função que diminui o valor do input
        if (quantity > 1) {// Os valores do input só poderam ser subtraidos se a quantidade for maior que 1 
            setQuantity(quantity - 1);// Diminui de 1 em 1 a quantidade
            setPriceSum(priceSum - price);// Subtrai o preço inicial do produto do seu preço atual
            addToCartTotal(1 * - price);// Subtrai do valor total do carrinho o preço inicial
        }
    }

    return (
        <div className='sidebar-product'>
            <div>
                <button
                    onClick={() => {
                        removeProductFromCart(id);// O produto pertecente a esse id passado como parãmetro será removido porque ele é diferente dos
                        //produtos do array de ids pertencente a essa função( removeProductFromCart(id)) que está la em App.js
                        addToCartTotal(- priceSum);
                    }}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <div className='details'>
                    <h4>{name}</h4>
                    <h4>{price} R$</h4>

                    <div className='input-and-button'>
                        <input type='number' min={1} max={100}
                            value={quantity}// O valor do input será a quantidade do produto selecionado
                            onChange={(e) => {// Evento onchange
                                setQuantity(e.target.value);// O value será a quantidade do mesmo produto 
                                setPriceSum(e.target.value * price);//a quantidade(value) será multiplicada pelo preço do produto(price) 
                                addToCartTotal(e.target.value * price - priceSum);
                            }}
                            className='input-quantity' />

                        <div className='valor-input'>
                            <div>
                                <button onClick={almentarValor}>+</button>
                            </div>
                            <div>
                                <button onClick={diminuirValor}>-</button>
                            </div>

                        </div>
                    </div>

                    <p className='quantity-margin'>Quantidade</p>

                    {priceSum > price && (
                        <p>
                            <b>Total: </b>
                            <b>{priceSum} R$</b>
                        </p>
                    )}
                </div>

            </div>

            <div className='right-side'>
                <img src={image} alt={name} />
            </div>
        </div>
    )
}
