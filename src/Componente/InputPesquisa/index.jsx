import styled from "styled-components";

import { Link } from "react-router-dom";
import BotaoPesquisa from "../botaoPesquisa";
import InputPadrao from "../input";

const PesquisaEstilizada = styled.div`
    display: flex;
    gap: 16px;
`

const InputPesquisa = () => {
    return (
        <PesquisaEstilizada>
            <InputPadrao/>
            <Link to="/login">
                <BotaoPesquisa/>
            </Link>
        </PesquisaEstilizada>
    )
}

export default InputPesquisa;