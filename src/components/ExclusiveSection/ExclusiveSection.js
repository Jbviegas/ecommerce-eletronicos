import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import React from 'react'
import "./style.css";

export default function ExclusiveSection() {
    return (
        <div className='exclusive-section'>
            <div className='page-inner-content'>
                <div className='content'>
                    <div className='left-side'>
                        <div className="section-title">
                            <h2>Smart Band 4</h2>
                        </div>
                        <p>
                            O Mi Smat Band 4 tem uma tela AMOLED 39.9% maior que o Mi Band 3
                            sua tela é completamente digital com brilho ajustável, de tal modo
                            que tudo fica claro ao máximo
                        </p>

                        <Link to={"/products"} className='see-more-btn'>
                            <span>Ver agora</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </div>
                    <div className='right-side'>
                        <img src='/images/exclusive.png' alt='Smart Band 4' />
                    </div>

                </div>
            </div>
        </div>
    )
}
