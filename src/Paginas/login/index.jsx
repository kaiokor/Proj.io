import styled from "styled-components"
import BannerLoginPrivado from "../../Componente/BannerLoginPrivado"
import EstilosGlobais from "../../Componente/EstilosGlobais"
import Nav from "../../Componente/nav"
import InputPadrao from "../../Componente/input"
import Botao from "../../Componente/Botao"
import { Link } from "react-router-dom"

const LoginEstilizado = styled.div`
    width:1100px;
    text-decoration:none;
    margin:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
`
const LabelEstilizad = styled.p`
    font-size: 24px;
    font-family: sans-serif;
`

const DivLabel = styled.div`
    
`
const DivBotao = styled.div`
    width: 925px;
    display:flex;
    justify-content:right;
`	

const PaginaLogin = () => {
    return (
        <>
            <Nav/>
            <BannerLoginPrivado/>
            <LoginEstilizado>
                <DivLabel>
                    <LabelEstilizad>Palavra chave:</LabelEstilizad>
                    <InputPadrao></InputPadrao>
                </DivLabel>
                <DivLabel>
                    <LabelEstilizad >Senha:</LabelEstilizad>
                    <InputPadrao type="password"></InputPadrao>
                </DivLabel>
                <DivBotao>
                    <Link to='/' style={{ textDecoration: "none"}}>
                        <Botao style={{ position: "left" }}>Acessar</Botao>
                    </Link>
                </DivBotao>
            </LoginEstilizado>
        </>
    )
}

export default PaginaLogin