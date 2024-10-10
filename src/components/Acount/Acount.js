import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';

export default function Acount() {

var EntrarPainel = document.getElementById("EntrarPainel");
var CadastroSite = document.getElementById("CadastroSite");
var Indicador = document.getElementById("Indicador");


function Entrar() {
    CadastroSite.style.left = "-300px"
    EntrarPainel.style.left = "0px"
    Indicador.style.transform = "translateX(0px)"
}

function Cadastro() {
    CadastroSite.style.left = "0"
    EntrarPainel.style.left = "-300px"
    Indicador.style.transform = "translateX(110px)"
}

    return (
    <div class="minha-conta">
        <div class="containner-conta">
                <div class="col-2">
                    <div class="formulario">
                        <div class="btn-form">
                            <span onClick={Entrar}>Entrar</span>
                            <span onClick={Cadastro}>Cadastro</span>
                            <hr id="Indicador"/>
                        </div>
                        <form action="" method="post" id="EntrarPainel">
                            <input type="text" name="email" placeholder="Email de acesso"/>
                            <input type="password" name="senha" placeholder="Digite sua Senha"/>
                            <button type="submit" name="senEntrar" class="btn-3">Entrar</button>
                            <Link to={"#"} >Esqueceu a senha</Link>
                        </form>

                        <form action="" method="post" id="CadastroSite">
                            <input type="text" name="nome" placeholder="Nome Completo"/>
                            <input type="text" name="email" placeholder="Email de acesso"/>
                            <input type="password" name="senha" placeholder="Digite sua Senha"/>
                            <button type="submit" name="sendCad" class="btn-3">Cadastre-se</button>
                        </form>
                </div>

            </div>
        </div>
    </div>
    )
}
