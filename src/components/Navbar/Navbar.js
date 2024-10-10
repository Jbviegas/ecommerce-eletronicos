import React, { useState } from 'react';

import "./style.css";

import { Link } from 'react-router-dom';

import { faBars, faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ selectedProduct }) {
    const [show, setShow] = useState(false);

    function cliqueiNoMenu() {
        let sidebar = document.querySelector(".sidebar-cart")

        sidebar.style.display = "block"

    }
    return (
        <div className="nav">
            <div className='inner-content'>
                <h1 className="logo">
                    LOV<span>STORE</span>
                </h1>
                <nav className={`${show && "show"}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Produtos</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contatos</Link>
                        </li>

                    </ul>
                </nav>
                <div className='navs-icon-containner'>
                    <div className='search-imput'>
                        <input type='search' placeholder='Pesquisar' />
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <button className='shopping-cart' onClick={cliqueiNoMenu}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <div className='products-count'>{selectedProduct.length}</div>{ /* bolinha vermelha com a quantidade de produtos no carrinho */}
                    </button>

                    <button className='user'>
                        <Link to="/acount"><FontAwesomeIcon icon={faUser} /></Link>
                    </button>

                    <button className='menu-button' onClick={() => setShow(!show)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
        </div>
    )
}
