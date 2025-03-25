import styled from "styled-components";

const BotaoEstilizado = styled.button`
    background-color: #5DC91B;
    width: 232px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: none;
    box-shadow: 6px 5px 4px rgba(0,0,0,0.25);
    font-family: sans-serif;
    color: white;
    cursor: pointer;
    font-size:24px;
`

const Botao = ({ children }) =>{
    return(
        <BotaoEstilizado>{children}</BotaoEstilizado>
    )
}

export default Botao;