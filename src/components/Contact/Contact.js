import React from 'react'
import "./style.css";

export default function Contact() {

    return (
        <div class="minha-conta">
        <div class="containner-conta">
            <div class="linha">
                <div class="col-2">
                    <div class="formulario">

                        <div class="btn-form">
                            <span onclick="Entrar()">Contato</span>
                        </div>

                        <form action="" method="post" id="CadastroSite-2">
                            <input type="text" name="nome" id="" placeholder="Nome Completo"/>
                            <input type="text" name="number" id="" placeholder="Telefone"/>
                            <input type="text" name="email" id="" placeholder="E-mail de acesso"/>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Deixe sua mensagem"></textarea>
                            <button type="submit" name="sendCadastro" class="btn-3">Enviar</button>

                        </form>


                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}
