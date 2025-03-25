import styled from "styled-components";
import ImgPesquisa from "../assets/procurar.png"

const PesquisaEstilizada = styled.div`
    display: flex;
    gap: 16px;
`

const InputEstilizado = styled.input`
    width:922px;
    height:80px;
    border-radius: 8px;
    border:none;
    border-bottom: 4px solid #5DC91B;
    padding-left:18px;
    box-sizing: border-box;
    font-size: 24px;
    box-shadow: 6px 5px 4px rgba(0,0,0,0.25);
`

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

const InputPesquisa = () => {
    return (
        
        <PesquisaEstilizada>
            <InputEstilizado></InputEstilizado>
            <BotaoPesquisarEstilizado> <img src= { ImgPesquisa } width={ 32 }></img></BotaoPesquisarEstilizado>

        </PesquisaEstilizada>
    )
}

export default InputPesquisa;