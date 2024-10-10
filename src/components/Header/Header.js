import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from 'react'
import { Link } from 'react-router-dom';

import "./style.css";

export default function Header() {
    return (
        <header>
            <div className='inner-content'>
                <div className='left-side'>
                    <h2>Dê um novo estilo ao seu trabalho!</h2>
                    <p>
                        Sucesso nem sempre tem haver com Talento. Tem haver muitas das vezes com esforço
                        e consistência. Trabalho duro consistentente supera o talento.
                    </p>
                    <Link to={"/products"} className='see-more-btn'>
                        <span>Ver agora</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </div>
                <div className='right-side'>
                    <img src='/images/header-image.png' alt='produtos' />
                </div>
            </div>
        </header>

    )
}
