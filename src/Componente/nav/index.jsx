import styled from "styled-components"
import Botao from "../Botao";



const NavEstilizada = styled.div`
    display: flex;
    align-items:center;
    max-width:1105px;
    justify-content: space-between;
    padding: 16px;
    margin:auto;
`

const TituloEstilizado = styled.p`
    color:#5DC91B;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: bold;
`

const Nav = () =>{
    return(
        <NavEstilizada>
            <TituloEstilizado>Proj.io</TituloEstilizado>
            <Botao>Criar Projeto</Botao>
        </NavEstilizada>
    )
}

export default Nav;