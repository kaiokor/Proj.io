import styled from "styled-components"
import ImgPesquisa from "../assets/procurar.png"

const BotaoPesquisarEstilizado = styled.button`
    height:80px;
    width: 160px;
    background-color: #5DC91B;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: none;
    box-shadow: 6px 5px 4px rgba(0,0,0,0.25);
    cursor: pointer;
    /* hover só funcionamdo no children da classe */
    /* :hover{
        background-color:#418615;
        width:80px;
    } */

`

const BotaoPesquisa = () => {
    return(
        <BotaoPesquisarEstilizado>
            <>
                <img src= { ImgPesquisa } width={ 32 }></img>
            </>
        </BotaoPesquisarEstilizado>
    )
}

export default BotaoPesquisa