import styled from "styled-components"
import Github from "../assets/Github.png"
import Linkedin from "../assets/Linkedin.png"


const CardEstilizado = styled.div`
    display:flex;
    flex-direction:column;
    width:240px;
    margin: 42px;
`
const ImagemEstilizada = styled.div`
    background-color: #D9D9D9;
    width:240px;
    height:240px;
    border-radius:250px;
`
const NomeEstilizado = styled.p`
    color:#5DC91B;
    margin: 16px auto;
    font-size:32px;
    font-family: sans-serif;
    font-weight: bold;
`
const SecaoLinksEstilizada = styled.div`
    display: flex;
    justify-content: center;
    gap:16px;
`

const CardDev = ({ nome, linkLinkedin='#', linkGithub='#'}) => {
    return(
        <CardEstilizado>
            <ImagemEstilizada></ImagemEstilizada>
            <NomeEstilizado>{nome}</NomeEstilizado>
            <SecaoLinksEstilizada>
                <a href={linkLinkedin}>
                    <img src={Linkedin}></img>
                </a>
                <a href={linkGithub}>
                    <img src={Github}></img>
                </a>
            </SecaoLinksEstilizada>
        </CardEstilizado>
    )
}

export default CardDev