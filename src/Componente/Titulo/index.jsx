import styled from "styled-components";

const DivEstilizado = styled.div`
    display:flex;
    max-width:1100px;
    
    margin: auto;
`
const TituloEstilizado = styled.h1`
    color: #5DC91B;
    font-family: sans-serif;
    margin: auto;
    text-align: center;
    border-bottom: 3px solid black;
    
    padding:8px;
`

const Titulo = ({ children }) => {
    return (
        <DivEstilizado>
            <TituloEstilizado>
                {children}
            </TituloEstilizado>
        </DivEstilizado>
    )
}

export default Titulo