import styled from "styled-components"
import Titulo from "../Titulo"

const SecaoEstilizada = styled.section`
    width:1100px;
    margin:auto;
    display:flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    
`

const Secao = ({ titulo, children }) => {
    return (
        <>
            <Titulo>{titulo}</Titulo>  
            <SecaoEstilizada>
                {children}
            </SecaoEstilizada>
        </>
    )
}

export default Secao