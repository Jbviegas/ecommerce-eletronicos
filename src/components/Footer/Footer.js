import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div>
                <div className='page-inner-content content'>
                    <div className='reverse'>
                        <div className='links'>
                            <h3>Links úteis</h3>
                            <ul>
                                <li><Link to="/">Quem somos</Link></li>
                                <li><Link to="/">localização</Link></li>
                                <li><Link to="/">Redes Sociais</Link></li>
                                <li><Link to="/">Sugestões e reclamações</Link></li>

                            </ul>
                        </div>
                        <div className='logo-footer'>
                            <h1 className="logo">
                                LOV<span>STORE</span>
                            </h1>
                            <p>Nosso objetivo é fornecer a vocês nossos clientes
                                a melhor experiência de compra e o melhor atendimento.
                            </p>
                        </div>
                    </div>

                    <div className='dowload-options'>
                        <p><span>Nossos aplicativos</span></p>
                        <p>Baixe nosso aplicativo para Android e IOS</p>
                        <div>
                            <img src='/images/app-store.png' alt='App Store Dowload' />
                            <img src='/images/play-store.png' alt='Play Store Dowload' />
                        </div>
                    </div>
                </div>
                <hr />
                <div className='page-inner-content'>
                    <p className='copyright'>&#9400; Josue Viegas - Todos os Direitos Reservados</p>
                </div>
            </div>
        </footer>
    )
}
